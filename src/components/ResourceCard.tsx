import React from 'react';
import { LucideIcon, ExternalLink, Download } from 'lucide-react';

interface ResourceCardProps {
  resource: {
    title: string;
    description: string;
    icon: LucideIcon;
    actionText: string;
    actionType: 'download' | 'external';
    link: string;
    fileName?: string;
    color: string;
  };
}

export function ResourceCard({ resource }: ResourceCardProps) {
  const Icon = resource.icon;
  
  const colorClasses = {
    blue: {
      bg: 'bg-blue-50',
      icon: 'text-blue-600',
      button: 'bg-blue-600 hover:bg-blue-700',
      border: 'border-blue-200'
    },
    green: {
      bg: 'bg-green-50',
      icon: 'text-green-600',
      button: 'bg-green-600 hover:bg-green-700',
      border: 'border-green-200'
    },
    purple: {
      bg: 'bg-purple-50',
      icon: 'text-purple-600',
      button: 'bg-purple-600 hover:bg-purple-700',
      border: 'border-purple-200'
    }
  };

  const colors = colorClasses[resource.color as keyof typeof colorClasses];

  const handleAction = () => {
    if (resource.actionType === 'download') {
      // Simula la descarga de un archivo
      const element = document.createElement('a');
      element.href = resource.link;
      element.download = resource.fileName || 'download';
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
    } else {
      // Abre el enlace en una nueva pestaña
      window.open(resource.link, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className={`bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border ${colors.border} overflow-hidden`}>
      <div className={`${colors.bg} p-6 border-b ${colors.border}`}>
        <div className="flex items-center gap-3">
          <div className={`w-12 h-12 ${colors.bg} rounded-lg flex items-center justify-center ring-2 ring-white`}>
            <Icon className={`w-6 h-6 ${colors.icon}`} />
          </div>
          <h3 className="text-gray-900">{resource.title}</h3>
        </div>
      </div>
      
      <div className="p-6">
        <p className="text-gray-600 mb-6 min-h-[48px]">
          {resource.description}
        </p>
        
        <button
          onClick={handleAction}
          className={`w-full ${colors.button} text-white px-4 py-3 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 shadow-sm`}
        >
          {resource.actionType === 'download' ? (
            <Download className="w-5 h-5" />
          ) : (
            <ExternalLink className="w-5 h-5" />
          )}
          {resource.actionText}
        </button>
      </div>
    </div>
  );
}
