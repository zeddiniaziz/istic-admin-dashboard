
import { useState } from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { PlusCircle, UserPlus } from "lucide-react";

// In a real app, this would come from a backend
const mockStudents = [
  { id: 1, name: "John Doe", email: "john@university.edu", major: "Computer Science", year: 3 },
  { id: 2, name: "Jane Smith", email: "jane@university.edu", major: "Physics", year: 2 },
  { id: 3, name: "Mark Johnson", email: "mark@university.edu", major: "Mathematics", year: 4 },
];

export default function Students() {
  const [students] = useState(mockStudents);

  return (
    <div className="container py-10">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8">
        <div>
          <h1 className="text-4xl font-bold">Students Management</h1>
          <p className="text-muted-foreground mt-1">Manage and organize student records</p>
        </div>
        <Button className="mt-4 sm:mt-0" asChild>
          <Link to="/students/add" className="flex items-center gap-2">
            <UserPlus className="h-4 w-4" />
            Add New Student
          </Link>
        </Button>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Student List</CardTitle>
          <CardDescription>View and manage all students</CardDescription>
        </CardHeader>
        <CardContent>
          {students.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4">Name</th>
                    <th className="text-left py-3 px-4 hidden md:table-cell">Email</th>
                    <th className="text-left py-3 px-4 hidden sm:table-cell">Major</th>
                    <th className="text-left py-3 px-4 hidden lg:table-cell">Year</th>
                    <th className="text-right py-3 px-4">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {students.map((student) => (
                    <tr key={student.id} className="border-b hover:bg-muted/50">
                      <td className="py-3 px-4">{student.name}</td>
                      <td className="py-3 px-4 hidden md:table-cell">{student.email}</td>
                      <td className="py-3 px-4 hidden sm:table-cell">{student.major}</td>
                      <td className="py-3 px-4 hidden lg:table-cell">{student.year}</td>
                      <td className="py-3 px-4 text-right">
                        <Button variant="outline" size="sm">View</Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p className="text-gray-500 mb-4">No students found. Add a new student to get started.</p>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
