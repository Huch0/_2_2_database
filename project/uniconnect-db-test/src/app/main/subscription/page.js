"use client";
import LabProfile from "@/components/LabProfile";
import PostCard from "@/components/PostCard";
import StudentContact from "@/components/StudentContact";
import UserBan from "@/components/UserBan";
import NewDraft from "@/components/NewDraft";

export default function Subscription() {
    return(
        <div>
            <NewDraft title="피드 제목" content="피드 내용" />
            <StudentContact name="학생 이름" major="전공" university="학교" />
            <UserBan name="유저 이름" />
            <PostCard title="피드 제목" content="피드 내용" author="저자" />
            <LabProfile labName="연구실 이름" university="대학" description="설명" />
        </div>
    )
}