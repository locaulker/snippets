"use client"

import type { Snippet } from "@prisma/client"
import Editor from "@monaco-editor/react"

interface SnippetsEditFormProps {
  snippet: Snippet
}

function SnippetsEditForm({ snippet }: SnippetsEditFormProps) {
  return (
    <div>
      <Editor
        height="40vh"
        theme="vs-dark"
        language="javascript"
        defaultValue={snippet.code}
        options={{
          minimap: { enabled: false }
        }}
      />
    </div>
  )
}

export default SnippetsEditForm
