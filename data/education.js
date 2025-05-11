class Course {
  constructor(term, items) {
    this.term = term;
    this.items = items;
  }

  // Method to get the course name
  getCourseCount() {
    return this.items.length;
  }
}

export const courses = [
  new Course("Autumn 2024", [
    "Web Technologies",
    "Programming and Problem Solving with Python",
    "Programming with JavaScript",
    "Technical Web Design and Usability",
  ]),
  new Course("Spring 2025", [
    "Web Applications for Mobile Devices",
    "Object-Oriented Web Technologies",
    "Algorithms and Data Structures with Object-Oriented Python",
    "Database Technologies for the Web",
  ]),
  new Course("Autumn 2025", [
    "Linux Operating System and Virtualization Techniques",
    "JavaScript-Based Web Frameworks",
    "Mathematical Modeling",
    "Software Development in Virtual Teams",
  ]),
  new Course("Spring 2026", [
    "Basic System Verification",
    "Data and Telecommunications",
    "Independent Project in Web Programming",
  ]),
];
