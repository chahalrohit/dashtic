import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { Modal, Button, Form, ModalBody, ModalHeader } from "reactstrap";
import { Editor } from "react-draft-wysiwyg";

export function LargeModaleditor() {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
    const { handleSubmit, control } = useForm({
      mode: "onChange",
    });
  
    const handleSubmitOnClick = ({ editor_content }:any) => {
      console.log("editor_content ==> ", editor_content);
    };
  
    const values = [true];
  
    return (
      <>
        {values.map((v:any, idx:any) => (
          <Button
            color="primary"
            className="mt-3 me-2"
            key={idx}
            onClick={toggle}
          >
            View Live Demo
            {typeof v === "string" && `below ${v.split("-")[0]}`}
          </Button>
        ))}
        <Modal
          size="lg"
          aria-labelledby="example-modal-sizes-title-lg"
          isOpen={modal} 
          fade={false} 
          toggle={toggle}
        >
          <ModalHeader toggle={toggle}>
              Create New Document
          </ModalHeader>
          <ModalBody>
            <section>
              <Form
                className="richText rich"
                onSubmit={handleSubmit(handleSubmitOnClick)}
              >
                <Controller
                  name="editor_content"
                  control={control}
                  defaultValue=""
                  render={(props:any) => (
                    <Editor
                      {...props}
                      onEditorStateChange={(editorState:any) => {
                        if (editorState.blocks) {
                          props.onChange(editorState.blocks[0]);
                        }
                      }}
                    />
                  )}
                />
              </Form>
            </section>
          </ModalBody>
        </Modal>
      </>
    );
  }