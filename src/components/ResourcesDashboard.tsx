import React from 'react';
import { Download, FileText, Table, Key, ExternalLink, BookOpen, Server, Wifi, Shield, Terminal } from 'lucide-react';
import { ResourceCard } from './ResourceCard';
import { CredentialsBox } from './CredentialsBox';
import { SSHTerminal } from './SSHTerminal';

export function ResourcesDashboard() {
  const resources = [
    {
      id: 1,
      title: 'Flujo n8n Workflow',
      description: 'Accede directamente a n8n para visualizar y editar el flujo de trabajo configurado.',
      icon: ExternalLink,
      actionText: 'Abrir n8n',
      actionType: 'external' as const,
      link: 'http://10.40.5.14:5678/home/workflows',
      color: 'blue'
    },
    {
      id: 2,
      title: 'Formulario de Evaluación',
      description: 'Accede al formulario de Google Forms para gestionar las evaluaciones de los estudiantes.',
      icon: FileText,
      actionText: 'Abrir Formulario',
      actionType: 'external' as const,
      link: 'https://docs.google.com/forms/d/e/1FAIpQLSeBSUBcMRSN7HA8TyTPUM8aMmUMAMLLsDRTDB4VMVgiMpcnlQ/viewform?pli=1&pli=1',
      color: 'green'
    },
    {
      id: 3,
      title: 'Base de Preguntas y Resultados',
      description: 'Accede a la hoja de Google Sheets con la base de datos de preguntas y resultados de las evaluaciones.',
      icon: Table,
      actionText: 'Abrir Hoja',
      actionType: 'external' as const,
      link: 'https://docs.google.com/spreadsheets/d/1oMjIYlrSItTyJGzUoRdtafkHNFPPqFk2yuCnl5qAhvM/edit?usp=sharing',
      color: 'purple'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-800 rounded-full mb-4">
          <BookOpen className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Panel de Recursos para Docentes</h1>
        <p className="text-gray-700 max-w-2xl mx-auto text-lg">
          Accede a todos los recursos necesarios para gestionar el flujo de trabajo de n8n y las evaluaciones de tus estudiantes.
        </p>
      </div>

      {/* Credentials Section */}
      <div className="mb-8">
        <CredentialsBox />
      </div>

      {/* Resources Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {resources.map((resource) => (
          <ResourceCard key={resource.id} resource={resource} />
        ))}
      </div>

      {/* Additional Instructions */}
      <div className="mt-12 bg-white rounded-xl shadow-md p-6 border border-gray-200">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <Key className="w-5 h-5 text-blue-600" />
            </div>
          </div>
          <div>
            <h3 className="text-gray-900 mb-2">Instrucciones de Acceso</h3>
            <ul className="text-gray-600 space-y-2 list-disc list-inside">
              <li>Utiliza las credenciales proporcionadas arriba para iniciar sesión en n8n</li>
              <li>Descarga el flujo de trabajo y importalo en tu instancia de n8n</li>
              <li>Las hojas de cálculo están sincronizadas en tiempo real</li>
              <li>Guarda tus credenciales en un lugar seguro</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Modos de Conexión SSH/VPN */}
      <div className="mt-8 space-y-6">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-6">Modos de Conexión al Servidor</h2>
        
        {/* Conexión desde Laboratorios */}
        <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-blue-200">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
              <Terminal className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-gray-900 font-bold text-xl mb-1">Conexión desde Laboratorios</h3>
              <p className="text-gray-700 text-sm">
                Conexión SSH directa mediante el puerto 22
              </p>
            </div>
          </div>
          
          <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
            <p className="text-sm text-gray-900 mb-2">
              Utilice herramientas como <strong>Putty</strong>, <strong>Terminus</strong>, o cualquier otra de su preferencia para conectarse al servidor a través del puerto 22.
            </p>
          </div>
        </div>

        {/* Conexión VPN desde Casa */}
        <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-purple-200">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-gray-900 font-bold text-xl mb-1">Conexión desde Casa (VPN)</h3>
              <p className="text-gray-700 text-sm">
                Configuración de Red Privada Virtual (VPN)
              </p>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
              <h4 className="text-gray-900 font-bold text-base mb-2">1. Instalar Forticlient VPN</h4>
              <div className="bg-white rounded px-4 py-3 border border-purple-200">
                <code className="text-gray-900 text-sm break-all">
                  https://comunidadingenieria.cl/FortiClientVPNInstaller.exe
                </code>
              </div>
            </div>

            <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
              <h4 className="text-gray-900 font-bold text-base mb-3">2. Parámetros de Conexión VPN</h4>
              <div className="space-y-2">
                <div className="flex justify-between items-center bg-white rounded px-4 py-2 border border-purple-200">
                  <span className="text-gray-700 text-sm font-semibold">Gateway Remoto:</span>
                  <code className="text-gray-900 font-bold">200.27.73.13</code>
                </div>
                <div className="flex justify-between items-center bg-white rounded px-4 py-2 border border-purple-200">
                  <span className="text-gray-700 text-sm font-semibold">Usuario:</span>
                  <code className="text-gray-900 font-bold">Usuario Intranet</code>
                </div>
                <div className="flex justify-between items-center bg-white rounded px-4 py-2 border border-purple-200">
                  <span className="text-gray-700 text-sm font-semibold">Password:</span>
                  <code className="text-gray-900 font-bold">Password de Intranet</code>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Datos de Conexión al Servidor - Grupo 8 */}
        <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-green-200">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
              <Server className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-gray-900 font-bold text-xl mb-1">Datos de Conexión al Servidor - Grupo 8</h3>
              <p className="text-gray-700 text-sm">
                Credenciales de acceso SSH al servidor del grupo
              </p>
            </div>
          </div>
          
          <div className="bg-green-50 rounded-lg p-4 border border-green-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="bg-white rounded px-4 py-3 border border-green-200">
                <div className="text-gray-700 text-sm font-bold mb-1">Dirección IP</div>
                <code className="text-gray-900 font-bold text-lg">10.40.5.14</code>
              </div>
              <div className="bg-white rounded px-4 py-3 border border-green-200">
                <div className="text-gray-700 text-sm font-bold mb-1">Puerto</div>
                <code className="text-gray-900 font-bold text-lg">22</code>
              </div>
              <div className="bg-white rounded px-4 py-3 border border-green-200">
                <div className="text-gray-700 text-sm font-bold mb-1">Usuario</div>
                <code className="text-gray-900 font-bold text-lg">alumno</code>
              </div>
              <div className="bg-white rounded px-4 py-3 border border-green-200">
                <div className="text-gray-700 text-sm font-bold mb-1">Password</div>
                <code className="text-gray-900 font-bold text-lg">Unab.2025</code>
              </div>
            </div>
          </div>

          <div className="mt-4 flex items-start gap-2 bg-yellow-50 rounded-lg p-4 border-l-4 border-yellow-500">
            <div className="text-yellow-600 mt-0.5 text-xl">⚠️</div>
            <p className="text-sm text-gray-900">
              <strong className="font-bold">Importante:</strong> Asegúrate de estar conectado a la VPN si intentas acceder desde casa.
            </p>
          </div>
        </div>
      </div>

      {/* Terminal SSH Interactivo */}
      <div className="mt-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-6">Terminal SSH - Conectar al Servidor</h2>
        <SSHTerminal 
          host="10.40.5.14"
          port={22}
          username="alumno"
          password="Unab.2025"
        />
      </div>
    </div>
  );
}
