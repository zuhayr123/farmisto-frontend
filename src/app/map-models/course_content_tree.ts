export class CourseContentTreeModel {
    _id!:string
    course_id!: string;
    course_name!: string;
    course_short_info!: string;
    course_long_description!: string;
    category_name!: string;
    category_id!: string;
    item!: string;
    content_type!: string;
    content_id!: string;
    has_content!:boolean;
    belongs_to!:string;
    children!: [{
        item: string;
        content_type: string;
        content_id: string;
        has_content:boolean;
        belongs_to:string;
        children: [{
            item: string;
            content_type: string;
            content_id: string;
            has_content:boolean;
            belongs_to:string;
            children: [{
                item: string;
                content_type: string;
                content_id: string;
                has_content:boolean;
                belongs_to:string;
            }]
        }]
    }]
}