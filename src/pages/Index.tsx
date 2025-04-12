
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { UsersRound, GraduationCap, Building } from "lucide-react";

export default function Index() {
  // Temporary statistics - would be fetched from an API in a real app
  const stats = {
    students: 254,
    professors: 42,
    departments: 8
  };

  return (
    <div className="container py-10">
      <h1 className="text-4xl font-bold mb-8">University Admin Panel</h1>
      
      {/* Statistics Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
        <Card className="bg-gradient-to-br from-blue-50 to-blue-100">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total Students</p>
                <h2 className="text-3xl font-bold">{stats.students}</h2>
              </div>
              <div className="p-2 bg-blue-100 rounded-full">
                <UsersRound className="h-8 w-8 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-br from-purple-50 to-purple-100">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total Professors</p>
                <h2 className="text-3xl font-bold">{stats.professors}</h2>
              </div>
              <div className="p-2 bg-purple-100 rounded-full">
                <GraduationCap className="h-8 w-8 text-purple-600" />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-br from-amber-50 to-amber-100">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Departments</p>
                <h2 className="text-3xl font-bold">{stats.departments}</h2>
              </div>
              <div className="p-2 bg-amber-100 rounded-full">
                <Building className="h-8 w-8 text-amber-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      {/* Navigation Cards */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="overflow-hidden border-2 border-blue-100 hover:border-blue-300 transition-all">
          <CardHeader className="bg-gradient-to-r from-blue-50 to-blue-100">
            <CardTitle className="flex items-center gap-2">
              <UsersRound className="h-5 w-5" />
              Students
            </CardTitle>
            <CardDescription>Manage student records</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <p className="mb-4">View, add, edit, and delete student information.</p>
            <div className="flex flex-wrap gap-2">
              <Button asChild>
                <Link to="/students">View Students</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/students/add">Add Student</Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="overflow-hidden border-2 border-purple-100 hover:border-purple-300 transition-all">
          <CardHeader className="bg-gradient-to-r from-purple-50 to-purple-100">
            <CardTitle className="flex items-center gap-2">
              <GraduationCap className="h-5 w-5" />
              Professors
            </CardTitle>
            <CardDescription>Manage professor records</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <p className="mb-4">View, add, edit, and delete professor information.</p>
            <div className="flex flex-wrap gap-2">
              <Button asChild>
                <Link to="/professors">View Professors</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/professors/add">Add Professor</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
