'use client'
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Underline from '@tiptap/extension-underline'
import TextAlign from '@tiptap/extension-text-align'
import Link from '@tiptap/extension-link'
import Image from '@tiptap/extension-image'
import Placeholder from '@tiptap/extension-placeholder'
import { useEffect } from 'react'

const editorStyles = `
  .re-wrap { border: 1px solid #222; background: #0a0a0a; }
  .re-toolbar { display: flex; flex-wrap: wrap; gap: 2px; padding: 0.5rem; border-bottom: 1px solid #222; background: #111; }
  .re-btn { padding: 0.35rem 0.6rem; background: transparent; border: 1px solid transparent; color: #888; font-size: 0.75rem; cursor: pointer; transition: all 0.15s; font-family: 'Inter', sans-serif; min-width: 30px; text-align: center; }
  .re-btn:hover { color: #fff; background: rgba(255,255,255,0.05); }
  .re-btn.active { color: #e2771d; border-color: rgba(226,119,29,0.3); background: rgba(226,119,29,0.08); }
  .re-sep { width: 1px; background: #222; margin: 0 0.3rem; }
  .re-content { padding: 1rem; min-height: 250px; color: #ddd; font-size: 0.95rem; line-height: 1.8; }
  .re-content .tiptap { outline: none; min-height: 230px; }
  .re-content .tiptap h2 { font-family: 'Rajdhani', sans-serif; font-size: 1.4rem; font-weight: 700; color: #fff; margin: 1.5rem 0 0.5rem; text-transform: uppercase; }
  .re-content .tiptap h3 { font-family: 'Rajdhani', sans-serif; font-size: 1.15rem; font-weight: 700; color: #fff; margin: 1.2rem 0 0.4rem; }
  .re-content .tiptap p { margin-bottom: 0.8rem; }
  .re-content .tiptap strong { color: #fff; }
  .re-content .tiptap em { font-style: italic; }
  .re-content .tiptap u { text-decoration: underline; }
  .re-content .tiptap ul, .re-content .tiptap ol { padding-left: 1.5rem; margin-bottom: 0.8rem; }
  .re-content .tiptap li { margin-bottom: 0.3rem; }
  .re-content .tiptap blockquote { border-left: 3px solid #e2771d; padding-left: 1rem; margin: 1rem 0; color: #999; font-style: italic; }
  .re-content .tiptap a { color: #e2771d; text-decoration: underline; }
  .re-content .tiptap img { max-width: 100%; height: auto; margin: 1rem 0; }
  .re-content .tiptap hr { border: none; border-top: 1px solid #333; margin: 1.5rem 0; }
  .re-content .tiptap .is-editor-empty:first-child::before { content: attr(data-placeholder); float: left; color: #444; pointer-events: none; height: 0; }
`

interface RichEditorProps {
  value: string
  onChange: (html: string) => void
}

export default function RichEditor({ value, onChange }: RichEditorProps) {
  const editor = useEditor({
    immediatelyRender: false,
    extensions: [
      StarterKit.configure({
        heading: { levels: [2, 3] },
      }),
      Underline,
      TextAlign.configure({ types: ['heading', 'paragraph'] }),
      Link.configure({ openOnClick: false }),
      Image,
      Placeholder.configure({ placeholder: 'İçeriğinizi buraya yazın...' }),
    ],
    content: value,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML())
    },
  })

  useEffect(() => {
    if (editor && value !== editor.getHTML()) {
      editor.commands.setContent(value, false)
    }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  if (!editor) return null

  const addImage = () => {
    const url = prompt('Görsel URL girin:')
    if (url) editor.chain().focus().setImage({ src: url }).run()
  }

  const addLink = () => {
    const url = prompt('Link URL girin:')
    if (url) editor.chain().focus().setLink({ href: url }).run()
  }

  const ToolBtn = ({ onClick, active, children, title }: { onClick: () => void; active?: boolean; children: React.ReactNode; title?: string }) => (
    <button type="button" className={`re-btn ${active ? 'active' : ''}`} onClick={onClick} title={title}>{children}</button>
  )

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: editorStyles }} />
      <div className="re-wrap">
        <div className="re-toolbar">
          <ToolBtn onClick={() => editor.chain().focus().toggleBold().run()} active={editor.isActive('bold')} title="Kalın">
            <b>B</b>
          </ToolBtn>
          <ToolBtn onClick={() => editor.chain().focus().toggleItalic().run()} active={editor.isActive('italic')} title="İtalik">
            <i>I</i>
          </ToolBtn>
          <ToolBtn onClick={() => editor.chain().focus().toggleUnderline().run()} active={editor.isActive('underline')} title="Altı Çizili">
            <u>U</u>
          </ToolBtn>
          <ToolBtn onClick={() => editor.chain().focus().toggleStrike().run()} active={editor.isActive('strike')} title="Üstü Çizili">
            <s>S</s>
          </ToolBtn>

          <div className="re-sep" />

          <ToolBtn onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()} active={editor.isActive('heading', { level: 2 })} title="Başlık 2">
            H2
          </ToolBtn>
          <ToolBtn onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()} active={editor.isActive('heading', { level: 3 })} title="Başlık 3">
            H3
          </ToolBtn>
          <ToolBtn onClick={() => editor.chain().focus().setParagraph().run()} active={editor.isActive('paragraph')} title="Paragraf">
            P
          </ToolBtn>

          <div className="re-sep" />

          <ToolBtn onClick={() => editor.chain().focus().toggleBulletList().run()} active={editor.isActive('bulletList')} title="Madde İşaretli Liste">
            &#8226;
          </ToolBtn>
          <ToolBtn onClick={() => editor.chain().focus().toggleOrderedList().run()} active={editor.isActive('orderedList')} title="Numaralı Liste">
            1.
          </ToolBtn>
          <ToolBtn onClick={() => editor.chain().focus().toggleBlockquote().run()} active={editor.isActive('blockquote')} title="Alıntı">
            &ldquo;
          </ToolBtn>

          <div className="re-sep" />

          <ToolBtn onClick={() => editor.chain().focus().setTextAlign('left').run()} active={editor.isActive({ textAlign: 'left' })} title="Sola Hizala">
            &#8676;
          </ToolBtn>
          <ToolBtn onClick={() => editor.chain().focus().setTextAlign('center').run()} active={editor.isActive({ textAlign: 'center' })} title="Ortala">
            &#8596;
          </ToolBtn>
          <ToolBtn onClick={() => editor.chain().focus().setTextAlign('right').run()} active={editor.isActive({ textAlign: 'right' })} title="Sağa Hizala">
            &#8677;
          </ToolBtn>

          <div className="re-sep" />

          <ToolBtn onClick={addLink} active={editor.isActive('link')} title="Link Ekle">
            &#128279;
          </ToolBtn>
          <ToolBtn onClick={() => editor.chain().focus().unsetLink().run()} title="Linki Kaldır">
            &#10060;
          </ToolBtn>
          <ToolBtn onClick={addImage} title="Görsel Ekle">
            &#128247;
          </ToolBtn>
          <ToolBtn onClick={() => editor.chain().focus().setHorizontalRule().run()} title="Çizgi">
            &#8212;
          </ToolBtn>

          <div className="re-sep" />

          <ToolBtn onClick={() => editor.chain().focus().undo().run()} title="Geri Al">
            &#8617;
          </ToolBtn>
          <ToolBtn onClick={() => editor.chain().focus().redo().run()} title="Yinele">
            &#8618;
          </ToolBtn>
        </div>
        <div className="re-content">
          <EditorContent editor={editor} />
        </div>
      </div>
    </>
  )
}
