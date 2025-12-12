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
      title: 'Formulario - Responder',
      description: 'Accede al formulario de Google Forms para que los estudiantes respondan las evaluaciones.',
      icon: FileText,
      actionText: 'Responder Formulario',
      actionType: 'external' as const,
      link: 'https://docs.google.com/forms/d/e/1FAIpQLSeBSUBcMRSN7HA8TyTPUM8aMmUMAMLLsDRTDB4VMVgiMpcnlQ/viewform?pli=1&pli=1',
      color: 'green'
    },
    {
      id: 3,
      title: 'Formulario - Editar',
      description: 'Edita y gestiona el formulario de Google Forms para las evaluaciones de los estudiantes.',
      icon: FileText,
      actionText: 'Editar Formulario',
      actionType: 'external' as const,
      link: 'https://docs.google.com/forms/d/1Z05qElVniqVCqe8oRO0iLovdLD36FBtOaiWTfkD2JT8/edit',
      color: 'purple'
    },
    {
      id: 4,
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

    </div>
  );
}
