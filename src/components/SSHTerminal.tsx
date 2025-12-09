import React, { useEffect, useRef, useState } from 'react';
import { Terminal } from 'xterm';
import { FitAddon } from 'xterm-addon-fit';
import { WebLinksAddon } from 'xterm-addon-web-links';
import 'xterm/css/xterm.css';
import { Terminal as TerminalIcon, Power, Loader2 } from 'lucide-react';

interface SSHTerminalProps {
  host: string;
  port: number;
  username: string;
  password: string;
}

export function SSHTerminal({ host, port, username, password }: SSHTerminalProps) {
  const terminalRef = useRef<HTMLDivElement>(null);
  const xtermRef = useRef<Terminal | null>(null);
  const fitAddonRef = useRef<FitAddon | null>(null);
  const [isConnected, setIsConnected] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);
  const wsRef = useRef<WebSocket | null>(null);

  useEffect(() => {
    if (!terminalRef.current) return;

    // Inicializar terminal
    const term = new Terminal({
      cursorBlink: true,
      fontSize: 14,
      fontFamily: 'Consolas, "Courier New", monospace',
      theme: {
        background: '#1e1e1e',
        foreground: '#ffffff',
        cursor: '#ffffff',
        black: '#000000',
        red: '#cd3131',
        green: '#0dbc79',
        yellow: '#e5e510',
        blue: '#2472c8',
        magenta: '#bc3fbc',
        cyan: '#11a8cd',
        white: '#e5e5e5',
        brightBlack: '#666666',
        brightRed: '#f14c4c',
        brightGreen: '#23d18b',
        brightYellow: '#f5f543',
        brightBlue: '#3b8eea',
        brightMagenta: '#d670d6',
        brightCyan: '#29b8db',
        brightWhite: '#e5e5e5',
      },
    });

    const fitAddon = new FitAddon();
    const webLinksAddon = new WebLinksAddon();

    term.loadAddon(fitAddon);
    term.loadAddon(webLinksAddon);
    term.open(terminalRef.current);
    fitAddon.fit();

    xtermRef.current = term;
    fitAddonRef.current = fitAddon;

    // Mensaje de bienvenida
    term.writeln('\x1b[1;32m╔════════════════════════════════════════════════════════════╗\x1b[0m');
    term.writeln('\x1b[1;32m║    Terminal SSH - Grupo 8                                  ║\x1b[0m');
    term.writeln('\x1b[1;32m╚════════════════════════════════════════════════════════════╝\x1b[0m');
    term.writeln('');
    term.writeln(`\x1b[1;36mHost:\x1b[0m ${host}`);
    term.writeln(`\x1b[1;36mPort:\x1b[0m ${port}`);
    term.writeln(`\x1b[1;36mUser:\x1b[0m ${username}`);
    term.writeln('');
    term.writeln('\x1b[1;33mHaz clic en "Conectar" para establecer la conexión SSH.\x1b[0m');
    term.writeln('');

    // Manejar redimensionamiento
    const handleResize = () => {
      fitAddon.fit();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      term.dispose();
      if (wsRef.current) {
        wsRef.current.close();
      }
    };
  }, [host, port, username]);

  const connectSSH = () => {
    if (!xtermRef.current) return;

    setIsConnecting(true);
    const term = xtermRef.current;

    term.writeln('\x1b[1;33m⏳ Estableciendo conexión SSH...\x1b[0m');
    term.writeln('');

    // Nota: En un navegador web, no podemos hacer conexiones SSH directas
    // Necesitarías un backend que maneje la conexión SSH
    // Por ahora, simulamos la conexión y mostramos información
    
    setTimeout(() => {
      term.writeln('\x1b[1;31m⚠️  Conexión SSH directa no disponible desde el navegador.\x1b[0m');
      term.writeln('');
      term.writeln('\x1b[1;36mPara conectarte al servidor, utiliza:\x1b[0m');
      term.writeln('');
      term.writeln('\x1b[1;33m─────────────────────────────────────────────────────────\x1b[0m');
      term.writeln('');
      term.writeln('\x1b[1;32m1. Desde Windows (PowerShell/CMD):\x1b[0m');
      term.writeln(`   ssh ${username}@${host} -p ${port}`);
      term.writeln('');
      term.writeln('\x1b[1;32m2. Usando PuTTY:\x1b[0m');
      term.writeln(`   Host Name: ${host}`);
      term.writeln(`   Port: ${port}`);
      term.writeln(`   Connection Type: SSH`);
      term.writeln('');
      term.writeln('\x1b[1;32m3. Usando Terminus:\x1b[0m');
      term.writeln('   - Crear nueva conexión SSH');
      term.writeln(`   - Host: ${host}:${port}`);
      term.writeln(`   - Username: ${username}`);
      term.writeln(`   - Password: ${password}`);
      term.writeln('');
      term.writeln('\x1b[1;33m─────────────────────────────────────────────────────────\x1b[0m');
      term.writeln('');
      term.writeln('\x1b[1;36m💡 Recuerda:\x1b[0m');
      term.writeln('   - Si estás en casa, conecta primero la VPN');
      term.writeln('   - Gateway VPN: 200.27.73.13');
      term.writeln('   - Usa tus credenciales de Intranet para la VPN');
      term.writeln('');
      
      setIsConnecting(false);
      setIsConnected(true);
    }, 1500);
  };

  const copySSHCommand = () => {
    const command = `ssh ${username}@${host} -p ${port}`;
    navigator.clipboard.writeText(command);
    
    if (xtermRef.current) {
      xtermRef.current.writeln('');
      xtermRef.current.writeln('\x1b[1;32m✓ Comando SSH copiado al portapapeles!\x1b[0m');
      xtermRef.current.writeln('');
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center">
            <TerminalIcon className="w-5 h-5 text-green-400" />
          </div>
          <div>
            <h3 className="text-white font-medium">Terminal SSH</h3>
            <p className="text-gray-400 text-sm">
              {isConnected ? `Conectado a ${host}:${port}` : 'Desconectado'}
            </p>
          </div>
        </div>
        
        <div className="flex gap-2">
          <button
            onClick={copySSHCommand}
            className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors duration-200 flex items-center gap-2 text-sm"
          >
            📋 Copiar Comando
          </button>
          <button
            onClick={connectSSH}
            disabled={isConnecting}
            className="bg-green-600 hover:bg-green-700 disabled:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors duration-200 flex items-center gap-2 text-sm"
          >
            {isConnecting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Conectando...
              </>
            ) : (
              <>
                <Power className="w-4 h-4" />
                Conectar
              </>
            )}
          </button>
        </div>
      </div>
      
      <div 
        ref={terminalRef} 
        className="p-4 bg-[#1e1e1e]"
        style={{ height: '400px' }}
      />
      
      <div className="bg-gray-50 border-t border-gray-200 p-3 flex items-center justify-between">
        <div className="flex items-center gap-4 text-sm">
          <div className="flex items-center gap-2">
            <div className={`w-2 h-2 rounded-full ${isConnected ? 'bg-green-500' : 'bg-gray-400'}`}></div>
            <span className="text-gray-600">
              {isConnected ? 'Información mostrada' : 'Esperando conexión'}
            </span>
          </div>
        </div>
        
        <div className="text-xs text-gray-500">
          {host}:{port}
        </div>
      </div>
    </div>
  );
}
