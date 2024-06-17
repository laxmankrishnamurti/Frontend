import React from 'react'
import { Editor } from '@tinymce/tinymce-react'

function DemoRTC() {
    return (
        <Editor
            initialValue='Start writing here.........'
            init={
                {
                    branding: false,
                    height: 500,
                    menubar: true,
                    plugins: [
                        'advlist autolink lists link image charmap print preview anchor',
                        'searchreplace visualblocks code fullscreen',
                        'insertdatetime media table paste code help wordcount'
                    ],
                    toolbar: [
                        'undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help'
                    ]
                }
            }
        />
    )
}

export default DemoRTC