"use client";

export default function ChatPage() {
  return (
    <div style={{ width: '100vw', height: '100vh', overflow: 'hidden', backgroundColor: 'black' }}>
      <iframe 
        src="https://eternity-systems.onrender.com/" 
        style={{ width: '100%', height: '100%', border: 'none' }}
        title="Eternity Systems Chat"
        allow="camera; microphone; clipboard-read; clipboard-write"
      />
    </div>
  );
}