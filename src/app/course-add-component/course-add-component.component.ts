import { SelectionModel } from '@angular/cdk/collections';
import { FlatTreeControl } from '@angular/cdk/tree';
import { Component, Injectable, OnInit } from '@angular/core';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { BehaviorSubject } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { CreateCourseService } from '../create-course.service';
import { CourseContentTreeModel } from '../map-models/course_content_tree';
import { CourseCategoryModel } from '../map-models/course_category_model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';

export const _filter = (category: [{ category_name: string; category_id: string; }], value: string): ({ category_name: string; category_id: string; }[]) => {
  const filterValue = value.toLowerCase();

  return category.filter(item => item.category_name.toLowerCase().includes(filterValue));
};


export class TodoItemNode {
  children!: TodoItemNode[];
  item!: string;
  content_type!: string;
  content_id!: string;
  has_content!: boolean;
  belongs_to!:string
}

/** Flat to-do item node with expandable and level information */
export class TodoItemFlatNode {
  item!: string;
  level!: number;
  expandable!: boolean;
  hasChild!: boolean;
  content_id!: string;
}

/**
 * The Json object for to-do list data.
 */
const TREE_DATA = {
  CourseName: {

  }
};

/**
 * Checklist database, it can build a tree structured Json object.
 * Each node in Json object represents a to-do item or a category.
 * If a node is a category, it has children items and new items can be added under the category.
 */
@Injectable()
export class ChecklistDatabase {
  dataChange = new BehaviorSubject<TodoItemNode[]>([]);

  get data(): TodoItemNode[] { return this.dataChange.value; }

  constructor() {
    this.initialize();
  }

  initialize() {
    // Build the tree nodes from Json object. The result is a list of `TodoItemNode` with nested
    //     file node as children.
    const data = this.buildFileTree(TREE_DATA, 0);

    // Notify the change.
    this.dataChange.next(data);
  }

  /**
   * Build the file structure tree. The `value` is the Json object, or a sub-tree of a Json object.
   * The return value is the list of `TodoItemNode`.
   */
  buildFileTree(obj: { [key: string]: any }, level: number): TodoItemNode[] {
    return Object.keys(obj).reduce<TodoItemNode[]>((accumulator, key) => {
      const value = obj[key];
      const node = new TodoItemNode();
      node.item = key;

      if (value != null) {
        if (typeof value === 'object') {
          node.children = this.buildFileTree(value, level + 1);
        } else {
          node.item = value;
        }
      }

      return accumulator.concat(node);
    }, []);
  }

  /** Add an item to to-do list */
  insertItem(parent: TodoItemNode, name: string) {
    if (!parent.children) parent.children = [];

    if(parent.content_id==undefined){
      parent.content_id = Date.now().toString();
    }
    var currentTimeInMilliseconds = Date.now();
    console.log("the parent content id is : " + parent.content_id);
    parent.children.push({ item: name, content_id: currentTimeInMilliseconds.toString(), belongs_to:parent.content_id } as TodoItemNode);
    this.dataChange.next(this.data);
  }

  updateItem(node: TodoItemNode, name: string) {
    node.item = name;
    this.dataChange.next(this.data);
  }
}

@Component({
  selector: 'app-course-add-component',
  templateUrl: './course-add-component.component.html',
  styleUrls: ['./course-add-component.component.css'],
  providers: [ChecklistDatabase]
})
export class CourseAddComponentComponent implements OnInit {

  courseName!: string;
  category!: string;
  short_info!: string;
  long_info!: string;
  hide = false;
  /** Map from flat node to nested node. This helps us finding the nested node to be modified */
  flatNodeMap = new Map<TodoItemFlatNode, TodoItemNode>();

  /** Map from nested node to flattened node. This helps us to keep the same object for selection */
  nestedNodeMap = new Map<TodoItemNode, TodoItemFlatNode>();

  /** A selected parent node to be inserted */
  selectedParent: TodoItemFlatNode | null = null;

  /** The new item's name */
  newItemName = '';

  treeControl: FlatTreeControl<TodoItemFlatNode>;

  treeFlattener: MatTreeFlattener<TodoItemNode, TodoItemFlatNode>;

  dataSource: MatTreeFlatDataSource<TodoItemNode, TodoItemFlatNode>;

  /** The selection for checklist */
  checklistSelection = new SelectionModel<TodoItemFlatNode>(true /* multiple */);

  constructor(private _database: ChecklistDatabase, private router: Router, private route: ActivatedRoute, public service: CreateCourseService, private _formBuilder: FormBuilder) {
    this.treeFlattener = new MatTreeFlattener(this.transformer, this.getLevel,
      this.isExpandable, this.getChildren);
    this.treeControl = new FlatTreeControl<TodoItemFlatNode>(this.getLevel, this.isExpandable);
    this.dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

    _database.dataChange.subscribe(data => {
      this.dataSource.data = data;
    });
  }

  stateForm: FormGroup = this._formBuilder.group({
    stateGroup: '',
  });

  stateGroupOptions!: Observable<({
    letter: string;
    category: {
      category_name: string;
      category_id: string;
    }[]
  }[])>;

  ngOnInit(): void {
    this.getSugestions();
    console.log("the data receievd on open was  " + this.service.courseContentTreeModel._id);
    if (this.service.courseContentTreeModel._id != "" && this.service.courseContentTreeModel._id != undefined) {
      console.log("online data")
      this.courseName = this.service.courseContentTreeModel.course_name;
      this.short_info = this.service.courseContentTreeModel.course_short_info;
      this.long_info = this.service.courseContentTreeModel.course_long_description;
      this.category = this.service.courseContentTreeModel.category_name;
      this._database.data[0].children = this.service.courseContentTreeModel.children as any
      this._database.dataChange.next(this._database.data);
    }

    else {
      console.log("offline data was : " + this.service.courseContentTreeModel.course_name)
      if(this.service.courseContentTreeModel.course_name == "" || this.service.courseContentTreeModel.course_name == undefined){
        this.service.courseContentTreeModel.course_name = "New Course";
        this.courseName = this.service.courseContentTreeModel.course_name;
        this.service.courseContentTreeModel.course_id = Date.now().toString();
        this.service.courseContentTreeModel.content_id = this.service.courseContentTreeModel.course_id 
      }

      else{
        console.log("offline data was : " + this.service.courseContentTreeModel.course_name)
        this.service.courseContentTreeModel.course_id = Date.now().toString();
        this.service.courseContentTreeModel.content_id = this.service.courseContentTreeModel.course_id
        this.courseName = this.service.courseContentTreeModel.course_name;
        console.log("offline data was updated");
      }
      
      
    }

    this.stateGroupOptions = this.stateForm.get('stateGroup')!.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filterGroup(value))
      );
    // throw new Error('Method not implemented.');
  }

  updateCourseName(event: Event) {
    this.service.courseContentTreeModel.course_name = (event.target as HTMLElement).innerText;
    console.log("the course name as changed on button click was " + this.service.courseContentTreeModel.course_name)
  }

  getLevel = (node: TodoItemFlatNode) => node.level;

  isExpandable = (node: TodoItemFlatNode) => node.expandable;

  getChildren = (node: TodoItemNode): TodoItemNode[] => node.children;

  hasChild = (_: number, _nodeData: TodoItemFlatNode) => _nodeData.expandable;

  hasNoContent = (_: number, _nodeData: TodoItemFlatNode) => _nodeData.item === '';

  /**
   * Transformer to convert nested node to flat node. Record the nodes in maps for later use.
   */
  transformer = (node: TodoItemNode, level: number) => {
    const existingNode = this.nestedNodeMap.get(node);
    const flatNode = existingNode && existingNode.item === node.item
      ? existingNode
      : new TodoItemFlatNode();
    flatNode.item = node.item;
    flatNode.content_id = node.content_id
    flatNode.level = level;
    if (level < 3) {
      flatNode.expandable = true;
    }

    else {
      flatNode.expandable = false;
    }
    // edit this to true to make it always expandable
    flatNode.hasChild = !!node.children?.length;
    this.flatNodeMap.set(flatNode, node);
    this.nestedNodeMap.set(node, flatNode);

    console.log("level : " + level + "expandable" + !!node.children?.length)
    return flatNode;
  }

  /* Get the parent node of a node */
  getParentNode(node: TodoItemFlatNode): TodoItemFlatNode | null {
    const currentLevel = this.getLevel(node);

    if (currentLevel < 1) {
      return null;
    }

    const startIndex = this.treeControl.dataNodes.indexOf(node) - 1;

    for (let i = startIndex; i >= 0; i--) {
      const currentNode = this.treeControl.dataNodes[i];

      if (this.getLevel(currentNode) < currentLevel) {
        return currentNode;
      }
    }
    return null;
  }

  /** Select the category so we can insert the new item. */
  addNewItem(node: TodoItemFlatNode) {
    var parentNode = this.flatNodeMap.get(node);
    this._database.insertItem(parentNode!, '');
    this.treeControl.expand(node);
  }

  /** Save the node to database */
  saveNode(node: TodoItemFlatNode, itemValue: string) {
    const nestedNode = this.flatNodeMap.get(node);

    if (this.getLevel(node) == 1) {
      nestedNode!.content_type = "chapter"
    }

    else if (this.getLevel(node) == 2) {
      nestedNode!.content_type = "sub-chapter"
    }

    else if (this.getLevel(node) == 3) {
      nestedNode!.content_type = "content"
    }

    nestedNode!.has_content = false;

    this.service.courseContentTreeModel.children = this._database.data[0].children as any;

    var data_string = JSON.stringify(this.service.courseContentTreeModel);


    console.log("data got from json was called" + data_string);

    this._database.updateItem(nestedNode!, itemValue);
  }

  addCourseContent(content_id: string, content_name: string) {
    console.log("data as seen by the course content was " + content_id)
    this.router.navigateByUrl("ccp/add_course_content", { state: { data: { content_name: content_name, content_id: content_id, treeData : this.service.courseContentTreeModel } } });
  }

  getSugestions() {
    this.service.getSuggestions().subscribe((res) => {
      this.service.courseCategoryModel = res as CourseCategoryModel;
    });
  }

  onSubmit() {
    this.service.courseContentTreeModel.category_id = this.findCategory(this.category).category_id;
    this.service.courseContentTreeModel.category_name = this.findCategory(this.category).category_name;
    this.service.courseContentTreeModel.course_short_info = this.short_info;
    this.service.courseContentTreeModel.course_long_description = this.long_info;

    this.service.submitData(this.service.courseContentTreeModel).subscribe(
      data => console.log("Success", data),
      error => console.error("Error", error));

    console.log("the data on submit as seen was " + JSON.stringify(this.service.courseContentTreeModel))
  }

  findCategory(catgeories: string): ({
    category_name: string;
    category_id: string;
  }) {
    var category_name_selected: string;
    var category_id_selected: string = "";

    this.service.courseCategoryModel.state_group.forEach(element => {
      element.category.forEach(catgeoryType => {
        if (catgeoryType.category_name == catgeories) {
          category_id_selected = catgeoryType.category_id;
          category_name_selected = catgeoryType.category_name;
          console.log("found the category");
        }
      });
    });

    if (category_id_selected != undefined && category_id_selected != "") {
      return { category_name: catgeories, category_id: category_id_selected };
    }

    else {
      return { category_name: catgeories, category_id: Date.now().toString() };
    }

  }

  private _filterGroup(value: string): ({
    letter: string;
    category: {
      category_name: string;
      category_id: string;
    }[]
  }[]) {
    if (value) {
      return this.service.courseCategoryModel.state_group
        .map(group => ({ letter: group.letter, category: _filter(group.category, value) }))
        .filter(group => group.category.length > 0);
    }

    return this.service.courseCategoryModel.state_group;
  }
}
