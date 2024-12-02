'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AddCourseDialog } from '@/components/AddCourseDialog';

interface Course {
  id: string;
  name: string;
  schedule: string;
  description: string;
  participants: number;
  subject: string;
}

export default function CoursesPage() {
  const [courses, setCourses] = useState<Course[]>([
    {
      id: '1',
      name: 'Introduction to Computer Science',
      schedule: 'MWF 10:00 AM - 11:20 AM',
      description: 'Fundamental concepts of programming and computer science',
      participants: 25,
      subject: 'Computer Science'
    },
    {
      id: '2',
      name: 'Calculus I',
      schedule: 'TTH 2:00 PM - 3:20 PM',
      description: 'Introduction to differential and integral calculus',
      participants: 30,
      subject: 'Mathematics'
    },
    // Add more sample courses here
  ]);

  return (
    <>
      <div className="container mx-auto py-16">
        <header className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">Connect & Learn Together</Badge>
          <h1 className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6">
            Your Course Hub
          </h1>
          <p className="max-w-2xl mx-auto text-xl text-muted-foreground mb-8">
            Sync your schedule, join discussions, and collaborate with fellow students in your courses.
          </p>
          <div className="flex justify-center space-x-4">
            <AddCourseDialog />
          </div>
        </header>

        <main>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => (
              <Card key={course.id} className="transition-all hover:shadow-lg">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl mb-2">{course.name}</CardTitle>
                      <Badge variant="outline" className="mb-2">
                        {course.subject}
                      </Badge>
                    </div>
                  </div>
                  <CardDescription className="text-sm">
                    Schedule: {course.schedule}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">{course.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">
                      {course.participants} students enrolled
                    </span>
                    <Button variant="outline">Join Discussion</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </main>
      </div>
    </>
  );
}
