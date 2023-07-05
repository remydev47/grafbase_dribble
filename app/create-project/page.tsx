import { Modal, ProjectForm } from '@/components'
import React from 'react'

const CreateProject = () => {
  return (
   <Modal >
    <h3 className='modal-head-text'>Create A Project</h3>
    <ProjectForm />
   </Modal>
  )
}

export default CreateProject