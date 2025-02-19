import { useState } from "react"
import { Input, Button } from "./button"
import { Modal } from "./modal"



export const TaskModal = () => {
    const [showAddTaskModal, setShowAddTaskModal] = useState(false);
    return(
        <>
            <Modal title="Add Task" onClose={() => setShowAddTaskModal(false)}>
                <form action="" method="post">
                    <Input
                    type="text"
                    placeholder="Title of task"
                    name="title"
                    disabled={false}
                    id="title"
                    onChange={(e) => console.log(e.target.value)}
                    />
                    <Input
                    type="text"
                    placeholder="Description of task"
                    name="description"
                    disabled={false}
                    id="description"
                    onChange={(e) => console.log(e.target.value)}
                    />
                    <div className="flex flex-col gap-5">
                    <label htmlFor="priority">Choose priority</label>
                    <select className="w-full h-8 border border-black rounded" id="priority">
                        <option value="LOW">LOW</option>
                        <option value="MEDIUM">MEDIUM</option>
                        <option value="COMPLETED">COMPLETED</option>
                    </select>
                    </div>
                    <div className="flex flex-col gap-5 mt-5">
                    <label htmlFor="status">Choose status</label>
                    <select className="w-full h-8 border border-black rounded" id="status">
                        <option value="TODO">TODO</option>
                        <option value="IN_PROGRESS">IN_PROGRESS</option>
                        <option value="COMPLETED">COMPLETED</option>
                    </select>
                    </div>
                    <Button type="submit" onClick={() => alert('Task added!')}>Add Task</Button>
                </form>
            </Modal>
        </>
    )
}