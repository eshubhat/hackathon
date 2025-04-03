import { useState } from "react";
import SideMenu from "../../components/Navbar/Sidemenu";
import Navbar from "../../components/Navbar";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface StudentFields {
  usn: string;
  DOB: string;
  div: string;
  parentEmail: string;
}

// Initial student data
const initialStudents: StudentFields[] = [
  {
    usn: "21CS001",
    DOB: "2003-05-14",
    div: "A",
    parentEmail: "parent1@example.com",
  },
  {
    usn: "21CS002",
    DOB: "2004-08-22",
    div: "B",
    parentEmail: "parent2@example.com",
  },
  {
    usn: "21CS003",
    DOB: "2003-12-10",
    div: "A",
    parentEmail: "parent3@example.com",
  },
  {
    usn: "21CS004",
    DOB: "2004-03-18",
    div: "C",
    parentEmail: "parent4@example.com",
  },
  {
    usn: "21CS005",
    DOB: "2003-09-25",
    div: "B",
    parentEmail: "parent5@example.com",
  },
];

const AdminStudent = () => {
  const [students, setStudents] = useState<StudentFields[]>(initialStudents);
  const [editMode, setEditMode] = useState<string | null>(null);
  const [editedStudent, setEditedStudent] = useState<StudentFields | null>(
    null
  );

  // Handle edit button click
  const handleEdit = (usn: string) => {
    const studentToEdit = students.find((student) => student.usn === usn);
    if (studentToEdit) {
      setEditMode(usn);
      setEditedStudent({ ...studentToEdit });
    }
  };

  // Handle input change for editing
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (editedStudent) {
      setEditedStudent({
        ...editedStudent,
        [e.target.name]: e.target.value,
      });
    }
  };

  // Save edited student
  const handleSave = () => {
    if (editedStudent) {
      setStudents((prevStudents) =>
        prevStudents.map((student) =>
          student.usn === editedStudent.usn ? editedStudent : student
        )
      );
      setEditMode(null);
      setEditedStudent(null);
    }
  };

  // Cancel editing
  const handleCancel = () => {
    setEditMode(null);
    setEditedStudent(null);
  };

  return (
    <main className="min-h-screen w-full adminbody px-[28px] md:pl-[22vw] pr-[4vw]">
      <SideMenu />
      <div>
        <Navbar />
        <div className="pt-8">
          <Table>
            <TableCaption>A list of your registered Students.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">USN</TableHead>
                <TableHead>DOB</TableHead>
                <TableHead>Division</TableHead>
                <TableHead>Parent Email</TableHead>
                <TableHead className="text-right">Options</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {students.map((student) => (
                <TableRow key={student.usn}>
                  <TableCell className="font-medium">{student.usn}</TableCell>

                  {/* Editable Fields */}
                  {editMode === student.usn ? (
                    <>
                      <TableCell>
                        <input
                          type="date"
                          name="DOB"
                          value={editedStudent?.DOB || ""}
                          onChange={handleInputChange}
                          className="border p-1 w-full"
                        />
                      </TableCell>
                      <TableCell>
                        <input
                          type="text"
                          name="div"
                          value={editedStudent?.div || ""}
                          onChange={handleInputChange}
                          className="border p-1 w-full"
                        />
                      </TableCell>
                      <TableCell>
                        <input
                          type="email"
                          name="parentEmail"
                          value={editedStudent?.parentEmail || ""}
                          onChange={handleInputChange}
                          className="border p-1 w-full"
                        />
                      </TableCell>
                    </>
                  ) : (
                    <>
                      <TableCell>{student.DOB}</TableCell>
                      <TableCell>{student.div}</TableCell>
                      <TableCell>{student.parentEmail}</TableCell>
                    </>
                  )}

                  {/* Action Buttons */}
                  <TableCell className="flex justify-end gap-2">
                    {editMode === student.usn ? (
                      <>
                        <button
                          onClick={handleSave}
                          className="px-2 py-1 bg-green-500 rounded-xs cursor-pointer"
                        >
                          Save
                        </button>
                        <button
                          onClick={handleCancel}
                          className="px-2 py-1 bg-gray-400 rounded-xs cursor-pointer"
                        >
                          Cancel
                        </button>
                      </>
                    ) : (
                      <>
                        <button
                          onClick={() => handleEdit(student.usn)}
                          className="px-2 py-1 bg-blue-400 rounded-xs cursor-pointer"
                        >
                          Edit
                        </button>
                        <button className="px-2 py-1 bg-red-500 rounded-xs cursor-pointer">
                          Delete
                        </button>
                      </>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </main>
  );
};

export default AdminStudent;
