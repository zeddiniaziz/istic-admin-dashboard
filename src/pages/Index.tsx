
import { Link } from "react-router-dom";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { UsersRound, BookOpen, Landmark, BarChart } from "lucide-react";

export default function Index() {
  // Mock statistics
  const stats = {
    students: 1250,
    professors: 85,
    departments: 12,
    courses: 120
  };

  return (
    <div className="container mx-auto py-10">
      <div className="flex flex-col space-y-6">
        <div>
          <h1 className="text-4xl font-bold">University Management System</h1>
          <p className="text-muted-foreground mt-2">Dashboard overview of university statistics</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-lg font-medium">Students</CardTitle>
              <UsersRound className="h-5 w-5 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{stats.students}</div>
              <p className="text-xs text-muted-foreground">Enrolled students</p>
              <Button asChild variant="ghost" className="mt-4 w-full">
                <Link to="/students">View Students</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-lg font-medium">Professors</CardTitle>
              <BookOpen className="h-5 w-5 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{stats.professors}</div>
              <p className="text-xs text-muted-foreground">Faculty members</p>
              <Button asChild variant="ghost" className="mt-4 w-full">
                <Link to="/professors">View Professors</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-lg font-medium">Departments</CardTitle>
              <Landmark className="h-5 w-5 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{stats.departments}</div>
              <p className="text-xs text-muted-foreground">Academic departments</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-lg font-medium">Courses</CardTitle>
              <BarChart className="h-5 w-5 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{stats.courses}</div>
              <p className="text-xs text-muted-foreground">Available courses</p>
            </CardContent>
          </Card>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <Button asChild size="lg" className="flex-1">
            <Link to="/students/add">Add New Student</Link>
          </Button>
          <Button asChild size="lg" className="flex-1">
            <Link to="/professors/add">Add New Professor</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
