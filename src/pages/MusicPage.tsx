import Lesson from '../components/home/Lesson';
import { LessonImg } from "../assets";
import TopBar from '../components/common/TopBar';
import {styled} from 'styled-components';

interface LessonData {
    lessonImg: JSX.Element;
    lessonComment: string;
    lessonExplain: string;
    lessonTeacher: string;
    lessonScore: string;
    lessonDistance: string;
}

export default function MusicPage() {
    // api get 해올 부분
    const musicList: LessonData[] = [
        {
            lessonImg: <LessonImg/>,
            lessonComment: "솜사탕 같이 만들어볼까요?",
            lessonExplain: "아이들에게 꿈같은 시간을 선물합니다.",
            lessonTeacher: "살구 선생님", 
            lessonScore: "4.2",
            lessonDistance: "~234m",
        },
        {
            lessonImg: <LessonImg/>,
            lessonComment: "솜사탕 같이 만들어볼까요?",
            lessonExplain: "아이들에게 꿈같은 시간을 선물합니다.",
            lessonTeacher: "살구 선생님", 
            lessonScore: "4.2",
            lessonDistance: "~234m",
        },
        {
            lessonImg: <LessonImg/>,
            lessonComment: "솜사탕 같이 만들어볼까요?",
            lessonExplain: "아이들에게 꿈같은 시간을 선물합니다.",
            lessonTeacher: "살구 선생님", 
            lessonScore: "4.2",
            lessonDistance: "~234m",
        },
        
        {
            lessonImg: <LessonImg/>,
            lessonComment: "솜사탕 같이 만들어볼까요?",
            lessonExplain: "아이들에게 꿈같은 시간을 선물합니다.",
            lessonTeacher: "살구 선생님", 
            lessonScore: "4.2",
            lessonDistance: "~234m",
        },
        {
            lessonImg: <LessonImg/>,
            lessonComment: "솜사탕 같이 만들어볼까요?",
            lessonExplain: "아이들에게 꿈같은 시간을 선물합니다.",
            lessonTeacher: "살구 선생님", 
            lessonScore: "4.2",
            lessonDistance: "~234m",
        },
        {
            lessonImg: <LessonImg/>,
            lessonComment: "솜사탕 같이 만들어볼까요?",
            lessonExplain: "아이들에게 꿈같은 시간을 선물합니다.",
            lessonTeacher: "살구 선생님", 
            lessonScore: "4.2",
            lessonDistance: "~234m",
        }
    ]
    
    return (
      <St.MusicWrapper>
        <TopBar message = {"음악 카테고리"} />
        {musicList.map((lesson, idx) => (
            <Lesson key={idx} {...lesson} />
        ))}
      </St.MusicWrapper>
    );
}

const St = {
    MusicWrapper: styled.div`
    display: flex;
    flex-direction: column;
    `
}