
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Index() {
  return (
    <div className="container py-10">
      <h1 className="text-4xl font-bold mb-8">University Admin Panel</h1>
      
      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Students</CardTitle>
            <CardDescription>Manage student records</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">View, add, edit, and delete student information.</p>
            <Button asChild>
              <Link to="/students">View Students</Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Professors</CardTitle>
            <CardDescription>Manage professor records</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">View, add, edit, and delete professor information.</p>
            <Button asChild>
              <Link to="/professors">View Professors</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
