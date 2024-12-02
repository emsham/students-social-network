import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { PlusCircle } from "lucide-react"

export function AddCourseDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="lg" className="gap-2">
          <PlusCircle className="w-5 h-5" />
          Add New Course
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add New Course</DialogTitle>
          <DialogDescription>
            Enter your course details here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="courseName">
              Course Name
            </Label>
            <Input
              id="courseName"
              placeholder="Introduction to Psychology"
              className="col-span-3"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="subject">
              Subject
            </Label>
            <Input
              id="subject"
              placeholder="Psychology"
              className="col-span-3"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="schedule">
              Schedule
            </Label>
            <Input
              id="schedule"
              placeholder="MWF 10:00 AM - 11:20 AM"
              className="col-span-3"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="description">
              Description
            </Label>
            <Input
              id="description"
              placeholder="A brief description of the course..."
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save Course</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
