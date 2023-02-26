import CourseImage from './CourseImage';
import CourseText from './CourseText';
import CourseTableOfContent from './CourseTableOfContent';
const CourseDescription = () => {
    return ( 
        <section className="term-description">
         
                <CourseImage/>
                <CourseText />
                <CourseTableOfContent />
            
        </section>



     );
}
 
export default CourseDescription;