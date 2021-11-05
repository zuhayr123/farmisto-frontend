export class CourseContentTreeModel {
    course_id!: string;
    course_name!: string;
    course_short_info!: string;
    course_long_description!: string;
    category_name!: string;
    category_id!: string;
    item!: string;
    content_type!: string;
    content_id!: string;
    children!: [{
        item: string;
        content_type: string;
        content_id: string;
        children: [{
            item: string;
            content_type: string;
            content_id: string;
            children: [{
                item: string;
                content_type: string;
                content_id: string;
            }]
        }]
    }]
}