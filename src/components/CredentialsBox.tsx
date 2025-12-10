import React, { useState } from 'react';
import { Key, Copy, Check, Eye, EyeOff } from 'lucide-react';

export function CredentialsBox() {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(true);

  const credentials = {
    usuario: 'practica1@gmail.com',
    contraseña: 'Qwerty123'
  };

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 2000);
    });
  };

  return (
    <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl shadow-lg p-6 text-white">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
          <Key className="w-6 h-6" />
        </div>
        <div>
          <h2 className="text-white mb-1">Credenciales de Acceso a n8n</h2>
          <p className="text-indigo-100 text-sm">
            Utiliza estas credenciales para iniciar sesión en la plataforma n8n
          </p>
        </div>
      </div>

      <div className="space-y-4">
        {/* Usuario */}
        <div className="bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-lg text-white font-bold">Correo:</h3>
            <button
              onClick={() => copyToClipboard(credentials.usuario, 'usuario')}
              className="flex items-center gap-1 text-sm bg-white bg-opacity-20 hover:bg-opacity-30 px-3 py-1 rounded transition-all duration-200"
              title="Copiar usuario"
            >
              {copiedField === 'usuario' ? (
                <>
                  <Check className="w-4 h-4" />
                  Copiado
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  Copiar
                </>
              )}
            </button>
          </div>
          <div className="bg-gray-100 rounded px-4 py-3">
            <div className="text-xs text-gray-600 font-bold mb-1">Correo:</div>
            <code className="text-gray-900 font-semibold text-base break-all">{credentials.usuario}</code>
          </div>
        </div>

        {/* Contraseña */}
        <div className="bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-lg text-white font-bold">Contraseña:</h3>
            <div className="flex gap-2">
              <button
                onClick={() => setShowPassword(!showPassword)}
                className="flex items-center gap-1 text-sm bg-white bg-opacity-20 hover:bg-opacity-30 px-3 py-1 rounded transition-all duration-200"
                title={showPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'}
              >
                {showPassword ? (
                  <>
                    <EyeOff className="w-4 h-4" />
                    Ocultar
                  </>
                ) : (
                  <>
                    <Eye className="w-4 h-4" />
                    Mostrar
                  </>
                )}
              </button>
              <button
                onClick={() => copyToClipboard(credentials.contraseña, 'contraseña')}
                className="flex items-center gap-1 text-sm bg-white bg-opacity-20 hover:bg-opacity-30 px-3 py-1 rounded transition-all duration-200"
                title="Copiar contraseña"
              >
                {copiedField === 'contraseña' ? (
                  <>
                    <Check className="w-4 h-4" />
                    Copiado
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    Copiar
                  </>
                )}
              </button>
            </div>
          </div>
          <div className="bg-gray-100 rounded px-4 py-3">
            <div className="text-xs text-gray-600 font-bold mb-1">Contraseña:</div>
            <code className="text-gray-900 font-semibold text-base">
              {showPassword ? credentials.contraseña : '••••••••••'}
            </code>
          </div>
        </div>
      </div>

      <div className="mt-4 flex items-start gap-2 bg-white rounded-lg p-4 border-l-4 border-yellow-500 shadow-sm">
        <div className="text-yellow-600 mt-0.5 text-xl">⚠️</div>
        <p className="text-sm text-gray-900">
          <strong className="font-bold text-gray-900">Importante:</strong> Guarda estas credenciales en un lugar seguro. No las compartas con personas no autorizadas.
        </p>
      </div>
    </div>
  );
}
