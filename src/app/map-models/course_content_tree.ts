export class CourseContentTreeModel {
    course_name!: string;
    chapter_list!: [{
        chapter_title: string
        sub_chapter_list: [{
            sub_chapter_title: string;
            content_list: [{
                content_title: string;
            }]
        }]
    }]
}