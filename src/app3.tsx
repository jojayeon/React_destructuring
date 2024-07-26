enum kdtName {
  webdeveloper = "웹 개발자",
  Datas = "테이터 사이너 티스트",
  AI = "AI 엔지니어",
}

interface DKt {
  name: kdtName;
  level: number;
  skills: string[];
}

const student: DKt = {
  name: kdtName.webdeveloper,
  level: 3,
  skills: ["html", "css", "js"],
};

const { name: webName, level, skills } = student;

const primartSkill = skills[0];

console.log(webName);
console.log(level);
console.log(primartSkill);

//a외 스킬 다 가져오기 흠 내가 그냥 skills을 넣었다 실수 ㅎ

// 나열에 의미가 있을끼ㅏ? 흠
