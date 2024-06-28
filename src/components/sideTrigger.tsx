"use client";
import React from "react";
import { Button } from "./ui/button";
import { useAtom } from "jotai";
import { sideTriggerAtom } from "@/lib/store";

export default function SideTrigger() {
  const [, setVisible] = useAtom(sideTriggerAtom);
  return (
    <Button
      onClick={() => setVisible((v) => !v)}
      className="fixed top-5 left-2 z-10 sm:block hidden"
      variant="ghost"
    >
      {hideIcon}
    </Button>
  );
}

const hideIcon = (
  <svg
    width="21"
    height="21"
    viewBox="0 0 21 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M19.95 3.85877H1.04999C0.830688 3.85877 0.620369 3.77165 0.4653 3.61658C0.310231 3.46151 0.223114 3.25119 0.223114 3.03189C0.223114 2.81259 0.310231 2.60227 0.4653 2.4472C0.620369 2.29213 0.830688 2.20502 1.04999 2.20502H19.95C20.1693 2.20502 20.3796 2.29213 20.5347 2.4472C20.6897 2.60227 20.7769 2.81259 20.7769 3.03189C20.7769 3.25119 20.6897 3.46151 20.5347 3.61658C20.3796 3.77165 20.1693 3.85877 19.95 3.85877ZM19.95 10.8938H7.34999C7.20737 10.853 7.08191 10.7669 6.99259 10.6485C6.90327 10.5301 6.85495 10.3858 6.85495 10.2375C6.85495 10.0892 6.90327 9.94491 6.99259 9.82651C7.08191 9.7081 7.20737 9.62201 7.34999 9.58127H19.95C20.0516 9.55225 20.1585 9.54721 20.2623 9.56654C20.3662 9.58587 20.4641 9.62904 20.5485 9.69266C20.6328 9.75627 20.7012 9.83859 20.7483 9.93314C20.7954 10.0277 20.82 10.1319 20.82 10.2375C20.82 10.3432 20.7954 10.4473 20.7483 10.5419C20.7012 10.6364 20.6328 10.7188 20.5485 10.7824C20.4641 10.846 20.3662 10.8892 20.2623 10.9085C20.1585 10.9278 20.0516 10.9228 19.95 10.8938ZM19.95 18.2175H1.04999C0.830688 18.2175 0.620369 18.1304 0.4653 17.9753C0.310231 17.8203 0.223114 17.6099 0.223114 17.3906C0.223114 17.2821 0.244502 17.1745 0.286056 17.0742C0.32761 16.9739 0.388518 16.8827 0.4653 16.806C0.542083 16.7292 0.633237 16.6683 0.733558 16.6267C0.833879 16.5852 0.941402 16.5638 1.04999 16.5638H19.95C20.1693 16.5638 20.3796 16.6509 20.5347 16.806C20.6897 16.961 20.7769 17.1713 20.7769 17.3906C20.7769 17.6099 20.6897 17.8203 20.5347 17.9753C20.3796 18.1304 20.1693 18.2175 19.95 18.2175ZM1.04999 13.8075C0.959963 13.8091 0.870553 13.7924 0.787111 13.7586C0.703668 13.7247 0.627908 13.6744 0.564364 13.6106C0.439332 13.4852 0.369127 13.3153 0.369127 13.1381C0.369127 12.961 0.439332 12.7911 0.564364 12.6656L2.62499 10.605L0.564364 8.55752C0.439332 8.43205 0.369127 8.26215 0.369127 8.08502C0.369127 7.90789 0.439332 7.73798 0.564364 7.61252C0.62575 7.54695 0.699941 7.49468 0.782344 7.45895C0.864748 7.42322 0.953609 7.40478 1.04343 7.40478C1.13324 7.40478 1.22211 7.42322 1.30451 7.45895C1.38691 7.49468 1.4611 7.54695 1.52249 7.61252L4.04249 10.1325C4.16833 10.2602 4.23888 10.4323 4.23888 10.6116C4.23888 10.7909 4.16833 10.9629 4.04249 11.0906L1.52249 13.6106C1.39729 13.7363 1.22735 13.8071 1.04999 13.8075Z"
      fill="#666666"
    />
  </svg>
);
