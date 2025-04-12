
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Students() {
  return (
    <div className="container py-10">
      <h1 className="text-4xl font-bold mb-8">Students Management</h1>
      
      <Card>
        <CardHeader>
          <CardTitle>Student List</CardTitle>
          <CardDescription>Manage and view all students</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-gray-500 mb-4">No students found. Add a new student to get started.</p>
          <Button>Add New Student</Button>
        </CardContent>
      </Card>
    </div>
  );
}
