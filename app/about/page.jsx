import Image from "next/image";
import Skills from "../components/Skills";

export default function About() {
  const skills = [
    { name: "JavaScript", icon: "🟨" },
    { name: "React", icon: "⚛️" },
    { name: "Next.js", icon: "🌐" },
    { name: "Tailwind CSS", icon: "🎨" },
    { name: "Node.js", icon: "🟩" },
    { name: "Python", icon: "🐍" },
    { name: "Django", icon: "🌿" },
    { name: "SQL", icon: "📊" },
    { name: "REST APIs", icon: "🔗" },
    { name: "Responsive Design", icon: "📱" },
  ];

  return (
    <div className="container mx-auto py-16 px-6 text-gray-800 dark:text-gray-200">
      {/* 上半部分：自我介绍 */}
      <section className="flex flex-col lg:flex-row items-center mb-16">
        {/* 左侧：自我介绍 */}
        <div className="lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
          <h1 className="text-4xl font-bold mb-4">About Me</h1>
          <p className="text-lg leading-relaxed">
            Hi, I'm Nina Li, originally from [Your Location]. I used to be a
            teacher, where I honed my communication and interpersonal skills. Now, I am pursuing my passion for technology by studying web programming at BTH. The journey of learning modern technologies like Next.js and Tailwind CSS has been incredibly exciting and fulfilling. I love the challenge of creating innovative solutions and bringing ideas to life through code.
          </p>
        </div>
        {/* 右侧：照片 */}
        <div className="lg:w-1/2 flex justify-center">
          <Image
            src="/profile.jpg" // 替换为你的照片路径
            alt="Nina Li"
            width={300}
            height={300}
            className="rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* 下半部分：技能列表 */}
      <section>
        <Skills skills={skills} />
      </section>
    </div>
  );
}
