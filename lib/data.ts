import React from "react";
import optum from "@/public/optum.png";
import experian from "@/public/experian.png";
import psyche from "@/public/psyche.png";
//import rmtdevImg from "@/public/rmtdev.png";
//import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Skills",
    hash: "#skills",
  }
] as const;


export const projectsData = [
  {
    title: "UnitedHealth Group Optum",
    date:"Feb 2022-Present",
    description:
      "Developed a new project, that I was thrown into solo, that directly resulted in $980,000 of savings in the first quarter after production deployment.",
    tags: ["Java","Spring Boot","React","Node","Typescript","Python","Kafka","Kubernetes","MySQL", "DB2","Google Cloud"],
    imageTag:optum
  },
  {
    title: "Experian Consumer Services",
    date:"July 2021-Jan 2022",
    description:
      "Significant contributions to migrating and onboarding new services from a newly acquired insurance partner. Set up multiple Lambdas that, supported by AWS Kinesis and API Gateway, processed and delivered sensitive banking partner data",
    tags: ["Java","Spring Boot","React","Node","Typescript","Python","AWS","DynamoDB", "S3", "Kinesis", "Lambdas"],
    imageTag:experian
  },
  {
    title: "NASA Psyche Mission @ASU",
    date:"Aug 2021-July 2022",
    description:
      "Worked on a Full-stack meteorite catalog and query app that allows scientists to maintain a readily accessible database of elements. Implemented a Python and NLTK powered module to extract and pre-populate data from NASA studies dating back to the 90's. Was invited to the NASA Psyche launch in October 2023 for my contributions.",
    tags: ["Javascript","Python","Natural Language Processing","React", "Node","Docker", "PostgreSQL"], 
    imageTag:psyche
},
] as const;

export const skillsData = [
  "Java",
  "Sping Boot",
  "TypeScript",
  "Python",
  "JavaScript",
  "React",
  "Next.js",
  "Node.js",
  "Rust",
  "Solidity",
  "Solana",
  "Kafka",
  "PostgreSQL",
  "MySQL",
  "MongoDB",
  "Prisma",
  "GraphQL",
  "AWS",
  "Kubernetes",
  "GCP"
] as const;