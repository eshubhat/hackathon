import { useEffect, useState } from "react";
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
import { SearchIcon } from "@/assets/icons/Icons";

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

const FetchedDepartment: string[] = ["CS", "EC", "EE", "ME"];

interface NewStudentFields {
  username: string;
  email: string;
  DOB: string;
  JoiningYear: string;
  department: string;
  parentEmail: string;
}

const AdminStudent = () => {
  const [students, setStudents] = useState<StudentFields[]>(initialStudents);
  const [searchQuery, setSearchQuery] = useState("");
  const [newStudent, setNewStudent] = useState<NewStudentFields>({
    username: "",
    email: "",
    DOB: "",
    JoiningYear: new Date().getFullYear().toString(),
    department: "",
    parentEmail: "",
  });
  const [showAddForm, setShowAddForm] = useState(false);

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

  // Handle search
  const [filteredStudents, setFilteredStudents] =
    useState<StudentFields[]>(initialStudents);

  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredStudents(students);
    } else {
      setFilteredStudents(
        students.filter(
          (student) =>
            student.usn.toLowerCase().includes(searchQuery.toLowerCase()) ||
            student.parentEmail
              .toLowerCase()
              .includes(searchQuery.toLowerCase())
        )
      );
    }
  }, [searchQuery, students]);

  // Handle adding new student
  const handleAddStudent = () => {
    if (
      newStudent.username &&
      newStudent.email &&
      newStudent.DOB &&
      newStudent.JoiningYear &&
      newStudent.department &&
      newStudent.parentEmail
    ) {
      {
        /**Call api to backend to update student then just show the fields */
      }
      const response: string = "";
      const newAddedStudent: StudentFields = {
        usn: response,
        DOB: newStudent.DOB,
        div: response,
        parentEmail: newStudent.parentEmail,
      };
      setStudents([...students, newAddedStudent]);
      setNewStudent({
        username: "",
        email: "",
        DOB: "",
        parentEmail: "",
        JoiningYear: new Date().getFullYear().toString(),
        department: "",
      });
      setShowAddForm(false);
    }
  };

  return (
    <main className="min-h-screen w-full adminbody px-[28px] md:pl-[22vw] pr-[4vw]">
      <SideMenu />
      <div>
        <Navbar />

        <div className="flex justify-between items-center py-4">
          <div className="relative w-1/3">
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black">
              <SearchIcon />
            </div>
            <input
              type="text"
              placeholder="Search by USN or Email"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="border ring-2 ring-black px-10 py-1 rounded-md w-full pl-10 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <button
            onClick={() => setShowAddForm(true)}
            className="bg-green-500 text-white px-4 py-2 rounded-md"
          >
            Add Student
          </button>
        </div>

        {showAddForm && (
          <div className="p-4 border rounded-md shadow-md w-1/2 mx-auto mt-4">
            <h2 className="text-xl mb-2">Add New Student</h2>
            <input
              type="text"
              placeholder="Student Name"
              value={newStudent.username}
              onChange={(e) =>
                setNewStudent({ ...newStudent, username: e.target.value })
              }
              className="border p-2 w-full mb-2"
            />
            <input
              type="email"
              placeholder="Student Email"
              value={newStudent.email}
              onChange={(e) =>
                setNewStudent({ ...newStudent, email: e.target.value })
              }
              className="border p-2 w-full mb-2"
            />
            <input
              type="date"
              value={newStudent.DOB}
              onChange={(e) =>
                setNewStudent({ ...newStudent, DOB: e.target.value })
              }
              className="border p-2 w-full mb-2"
            />
            <input
              type="text"
              placeholder="Division"
              value={newStudent.JoiningYear}
              disabled
              // onChange={(e) =>
              //   setNewStudent({ ...newStudent, div: e.target.value })
              // }
              className="border p-2 w-full mb-2 cursor-not-allowed"
            />
            <select
              value={newStudent.department}
              onChange={(e) =>
                setNewStudent({ ...newStudent, department: e.target.value })
              }
              className="border p-2 w-full mb-2"
            >
              <option value="" disabled>
                Select Department
              </option>
              {FetchedDepartment.map((dept) => (
                <option key={dept} value={dept}>
                  {dept}
                </option>
              ))}
            </select>
            <input
              type="email"
              placeholder="Parent Email"
              value={newStudent.parentEmail}
              onChange={(e) =>
                setNewStudent({ ...newStudent, parentEmail: e.target.value })
              }
              className="border p-2 w-full mb-2"
            />
            <div className="flex justify-end gap-2">
              <button
                onClick={handleAddStudent}
                className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
              >
                Save
              </button>
              <button
                onClick={() => setShowAddForm(false)}
                className="bg-gray-400 text-white px-4 py-2 rounded-md cursor-pointer"
              >
                Cancel
              </button>
            </div>
          </div>
        )}
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
              {filteredStudents.map((student) => (
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
