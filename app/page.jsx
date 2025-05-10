import Image from "next/image";

export default function Home() {
  return (
    <div className="container mx-auto py-16 px-6">
      {/* 个人介绍 */}
      <section className="text-center mb-16">
        <Image
          src="/profile.jpg" // 替换为你的头像路径
          alt="Profile Picture"
          width={150}
          height={150}
          className="rounded-full mx-auto mb-6"
        />
        <h1 className="text-4xl font-bold mb-4">Hi, I'm Nina Li!</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          A passionate developer specializing in building modern web
          applications.
        </p>
      </section>

      {/* 项目概览 */}
      <section>
        <h2 className="text-2xl font-semibold mb-8 text-center">
          Some of My Latest Work
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* 示例项目卡片 */}
          <div className="border rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/images/project1.png"
              alt="Project 1"
              width={400}
              height={300}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">My UI Design Book</h3>
              <p className="text-gray-600 dark:text-gray-300">Book</p>
            </div>
          </div>
          <div className="border rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/images/project2.png"
              alt="Project 2"
              width={400}
              height={300}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">
                Creating a Lean Design System
              </h3>
              <p className="text-gray-600 dark:text-gray-300">Design System</p>
            </div>
          </div>
          <div className="border rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/images/project3.png"
              alt="Project 3"
              width={400}
              height={300}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">
                Interior Design News Feed
              </h3>
              <p className="text-gray-600 dark:text-gray-300">Side Project</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}