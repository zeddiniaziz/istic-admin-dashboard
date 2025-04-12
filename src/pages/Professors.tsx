
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Professors() {
  return (
    <div className="container py-10">
      <h1 className="text-4xl font-bold mb-8">Professors Management</h1>
      
      <Card>
        <CardHeader>
          <CardTitle>Professor List</CardTitle>
          <CardDescription>Manage and view all professors</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-gray-500 mb-4">No professors found. Add a new professor to get started.</p>
          <Button>Add New Professor</Button>
        </CardContent>
      </Card>
    </div>
  );
}
