
import { useState } from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { PlusCircle, UserPlus } from "lucide-react";

// In a real app, this would come from a backend
const mockProfessors = [
  { id: 1, name: "Dr. Robert Chen", email: "robert@university.edu", department: "Computer Science", yearsOfExperience: 15 },
  { id: 2, name: "Dr. Sarah Williams", email: "sarah@university.edu", department: "Physics", yearsOfExperience: 8 },
  { id: 3, name: "Dr. Michael Davis", email: "michael@university.edu", department: "Mathematics", yearsOfExperience: 12 },
];

export default function Professors() {
  const [professors] = useState(mockProfessors);

  return (
    <div className="container py-10">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8">
        <div>
          <h1 className="text-4xl font-bold">Professors Management</h1>
          <p className="text-muted-foreground mt-1">Manage and organize professor records</p>
        </div>
        <Button className="mt-4 sm:mt-0" asChild>
          <Link to="/professors/add" className="flex items-center gap-2">
            <UserPlus className="h-4 w-4" />
            Add New Professor
          </Link>
        </Button>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Professor List</CardTitle>
          <CardDescription>View and manage all professors</CardDescription>
        </CardHeader>
        <CardContent>
          {professors.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4">Name</th>
                    <th className="text-left py-3 px-4 hidden md:table-cell">Email</th>
                    <th className="text-left py-3 px-4 hidden sm:table-cell">Department</th>
                    <th className="text-left py-3 px-4 hidden lg:table-cell">Experience</th>
                    <th className="text-right py-3 px-4">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {professors.map((professor) => (
                    <tr key={professor.id} className="border-b hover:bg-muted/50">
                      <td className="py-3 px-4">{professor.name}</td>
                      <td className="py-3 px-4 hidden md:table-cell">{professor.email}</td>
                      <td className="py-3 px-4 hidden sm:table-cell">{professor.department}</td>
                      <td className="py-3 px-4 hidden lg:table-cell">{professor.yearsOfExperience} years</td>
                      <td className="py-3 px-4 text-right">
                        <Button variant="outline" size="sm">View</Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p className="text-gray-500 mb-4">No professors found. Add a new professor to get started.</p>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
