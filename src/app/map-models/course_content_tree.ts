export class CourseContentTreeModel {
    item!: string;
    children!: [{
        item: string
        children: [{
            item: string;
            children: [{
                item: string;
            }]
        }]
    }]
}