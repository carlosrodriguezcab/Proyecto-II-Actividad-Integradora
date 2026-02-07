import React, { useState } from 'react';
import { Calendar, User, CheckCircle, Clock, X, FileText, Target, ShieldCheck, Zap } from 'lucide-react';

const SprintCalendar = () => {
  const [selectedTask, setSelectedTask] = useState(null);

  const sprintData = [
    {
      week: 1,
      days: [
        { 
          date: 'Lun 02 Feb', 
          id: 'PB-01',
          task: 'Diseñar flujo de login', 
          hours: 'Día 1/2', 
          type: 'Design', 
          owner: 'Carlos R.C.',
          storyPoints: 8,
          userStory: 'Como residente, quiero registrarme e iniciar sesión para acceder de forma segura.',
          goal: 'Crear los wireframes y prototipos de alta fidelidad para la pantalla de acceso.',
          value: 'Sin esto, no hay puerta de entrada segura al sistema (Seguridad).',
          criteria: 'Diseño aprobado en Figma, incluye estados de error y éxito.'
        },
        { 
          date: 'Mar 03 Feb', 
          id: 'PB-01',
          task: 'Diseñar flujo de login', 
          hours: 'Día 2/2', 
          type: 'Design', 
          owner: 'Carlos R.C.',
          storyPoints: 8,
          userStory: 'Como residente, quiero registrarme e iniciar sesión...',
          goal: 'Finalizar prototipo y preparar assets para desarrollo.',
          value: 'Garantiza una experiencia de usuario fluida antes de programar.',
          criteria: 'Assets exportados y guía de estilos definida.'
        },
        { 
          date: 'Mié 04 Feb', 
          id: 'PB-01',
          task: 'Programar autenticación', 
          hours: 'Día 1/1', 
          type: 'Dev', 
          owner: 'Carlos R.C.',
          storyPoints: 8,
          userStory: 'Como residente, quiero registrarme e iniciar sesión...',
          goal: 'Implementar lógica de Backend (JWT) y formulario Frontend.',
          value: 'Funcionalidad base para proteger las rutas privadas.',
          criteria: 'El usuario recibe un token válido al ingresar credenciales correctas.'
        },
        { 
          date: 'Jue 05 Feb', 
          id: 'PB-01',
          task: 'Pruebas de acceso', 
          hours: 'Día 1/1', 
          type: 'Test', 
          owner: 'Carlos R.C.',
          storyPoints: 8,
          userStory: 'Como residente, quiero registrarme e iniciar sesión...',
          goal: 'Verificar seguridad y manejo de errores (contraseñas incorrectas).',
          value: 'Asegurar que nadie entre sin permiso.',
          criteria: '0 vulnerabilidades críticas detectadas en login.'
        },
        { 
          date: 'Vie 06 Feb', 
          id: 'PB-02',
          task: 'Definir roles y permisos', 
          hours: 'Día 1/1', 
          type: 'Design', 
          owner: 'Carlos R.C.',
          storyPoints: 5,
          userStory: 'Como administrador, quiero crear y gestionar usuarios por departamento.',
          goal: 'Establecer en código la diferencia entre Admin y Residente.',
          value: 'Evita que residentes accedan a paneles financieros (Control).',
          criteria: 'Matriz de roles documentada e implementada en middleware.'
        },
      ]
    },
    {
      week: 2,
      days: [
        { 
          date: 'Lun 09 Feb', 
          id: 'PB-02',
          task: 'CRUD de usuarios', 
          hours: 'Día 1/2', 
          type: 'Dev', 
          owner: 'Carlos R.C.',
          storyPoints: 5,
          userStory: 'Como administrador, quiero crear y gestionar usuarios...',
          goal: 'Crear endpoints para Crear, Leer, Actualizar y Borrar usuarios.',
          value: 'Permite poblar el sistema con los vecinos reales.',
          criteria: 'API responde correctamente a peticiones POST/GET/PUT/DELETE.'
        },
        { 
          date: 'Mar 10 Feb', 
          id: 'PB-02',
          task: 'CRUD de usuarios', 
          hours: 'Día 2/2', 
          type: 'Dev', 
          owner: 'Carlos R.C.',
          storyPoints: 5,
          userStory: 'Como administrador, quiero crear y gestionar usuarios...',
          goal: 'Conectar el Frontend con los endpoints de usuarios.',
          value: 'Interfaz gráfica para que el admin gestione vecinos sin usar código.',
          criteria: 'Formularios de alta y edición funcionales.'
        },
        { 
          date: 'Mié 11 Feb', 
          id: 'PB-02',
          task: 'Validación c/ admins', 
          hours: 'Día 1/1', 
          type: 'Review', 
          owner: 'Carlos R.C.',
          storyPoints: 5,
          userStory: 'Como administrador, quiero crear y gestionar usuarios...',
          goal: 'Presentar el módulo a un usuario real para feedback.',
          value: 'Asegurar usabilidad antes de avanzar.',
          criteria: 'Feedback del admin registrado y tickets de ajuste creados.'
        },
        { 
          date: 'Jue 12 Feb', 
          id: 'PB-09',
          task: 'Diseño lógico de BD', 
          hours: 'Día 1/2', 
          type: 'Design', 
          owner: 'Carlos R.C.',
          storyPoints: 8,
          userStory: 'Como sistema, quiero almacenar información en una BD segura.',
          goal: 'Crear el diagrama Entidad-Relación (ER) final.',
          value: 'Estructura sólida para evitar inconsistencia de datos a futuro.',
          criteria: 'Diagrama aprobado cubriendo Usuarios, Pagos y Deptos.'
        },
        { 
          date: 'Vie 13 Feb', 
          id: 'PB-09',
          task: 'Diseño lógico de BD', 
          hours: 'Día 2/2', 
          type: 'Design', 
          owner: 'Carlos R.C.',
          storyPoints: 8,
          userStory: 'Como sistema, quiero almacenar información en una BD segura.',
          goal: 'Normalización de la base de datos.',
          value: 'Optimización de consultas y espacio.',
          criteria: 'Modelo en 3ra Forma Normal.'
        },
      ]
    },
    {
      week: 3,
      days: [
        { 
          date: 'Lun 16 Feb', 
          id: 'PB-09',
          task: 'Configuración de BD', 
          hours: 'Día 1/2', 
          type: 'Dev', 
          owner: 'Carlos R.C.',
          storyPoints: 8,
          userStory: 'Como sistema, quiero almacenar información en una BD segura.',
          goal: 'Instalación y despliegue del motor de BD (PostgreSQL/MySQL).',
          value: 'Infraestructura necesaria para persistencia.',
          criteria: 'Servidor de BD activo y aceptando conexiones.'
        },
        { 
          date: 'Mar 17 Feb', 
          id: 'PB-09',
          task: 'Configuración de BD', 
          hours: 'Día 2/2', 
          type: 'Dev', 
          owner: 'Carlos R.C.',
          storyPoints: 8,
          userStory: 'Como sistema, quiero almacenar información en una BD segura.',
          goal: 'Creación de scripts de migración iniciales.',
          value: 'Versionamiento de la estructura de datos.',
          criteria: 'Tablas creadas correctamente mediante scripts.'
        },
        { 
          date: 'Mié 18 Feb', 
          id: 'PB-09',
          task: 'Pruebas de integridad', 
          hours: 'Día 1/1', 
          type: 'Test', 
          owner: 'Carlos R.C.',
          storyPoints: 8,
          userStory: 'Como sistema, quiero almacenar información en una BD segura.',
          goal: 'Verificar relaciones y constraints (Foreign Keys).',
          value: 'Evitar datos huérfanos o corruptos.',
          criteria: 'No se permiten registros sin relaciones obligatorias.'
        },
        { 
          date: 'Jue 19 Feb', 
          id: 'PB-10',
          task: 'Contraste y tipografía', 
          hours: 'Día 1/1', 
          type: 'Design', 
          owner: 'Carlos R.C.',
          storyPoints: 2,
          userStory: 'Como usuario, quiero un sistema accesible conforme a WCAG.',
          goal: 'Ajustar paleta de colores y fuentes legibles.',
          value: 'Cumplimiento normativo e inclusión (Usuarios mayores).',
          criteria: 'Pass en herramientas de validación de contraste (AA).'
        },
        { 
          date: 'Vie 20 Feb', 
          id: 'PB-10',
          task: 'Navegación simple', 
          hours: 'Día 1/1', 
          type: 'Design', 
          owner: 'Carlos R.C.',
          storyPoints: 2,
          userStory: 'Como usuario, quiero un sistema accesible conforme a WCAG.',
          goal: 'Habilitar navegación completa vía teclado.',
          value: 'Accesibilidad motriz.',
          criteria: 'Todos los elementos interactivos tienen foco visible.'
        },
      ]
    }
  ];

  const months = { 'Ene': 0, 'Feb': 1, 'Mar': 2, 'Abr': 3, 'May': 4, 'Jun': 5, 'Jul': 6, 'Ago': 7, 'Sep': 8, 'Oct': 9, 'Nov': 10, 'Dic': 11 };

  const isToday = (dateString) => {
    const today = new Date();
    const parts = dateString.split(' ');
    if (parts.length < 3) return false;
    const day = parseInt(parts[1], 10);
    const month = months[parts[2]];
    return today.getDate() === day && today.getMonth() === month;
  };

  const isWeekendToday = (fridayDateStr) => {
    const today = new Date();
    const parts = fridayDateStr.split(' ');
    if (parts.length < 3) return false;
    
    const day = parseInt(parts[1], 10);
    const month = months[parts[2]];
    const year = today.getFullYear();
    
    const friday = new Date(year, month, day);
    const saturday = new Date(friday);
    saturday.setDate(friday.getDate() + 1);
    const sunday = new Date(friday);
    sunday.setDate(friday.getDate() + 2);
    
    const checkDate = (d) => d.getDate() === today.getDate() && d.getMonth() === today.getMonth();
    return checkDate(saturday) || checkDate(sunday);
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'Design': return 'bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100';
      case 'Dev': return 'bg-emerald-50 text-emerald-700 border-emerald-200 hover:bg-emerald-100';
      case 'Test': return 'bg-purple-50 text-purple-700 border-purple-200 hover:bg-purple-100';
      case 'Review': return 'bg-amber-50 text-amber-700 border-amber-200 hover:bg-amber-100';
      default: return 'bg-gray-50 text-gray-700 border-gray-200';
    }
  };

  return (
    <div className="min-h-screen w-full bg-gray-50 p-8 font-sans">
      <style>{`
        @keyframes jump {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }
        .animate-jump {
          animation: jump 0.5s infinite ease-in-out;
        }
        .animate-jump:hover {
          animation: none;
        }
      `}</style>
      
      <div className="w-full max-w-[95%] mx-auto">
        <div className="mb-8 flex flex-col md:flex-row justify-between items-start md:items-center bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
              <Calendar className="w-8 h-8 text-indigo-600" />
              Calendarización: Sprint 1
            </h1>
            <p className="text-gray-600 mt-2 text-lg">
              <strong>Objetivo:</strong> Base del Sistema - MVP técnico funcional
            </p>
          </div>
          <div className="mt-4 md:mt-0 flex gap-6 text-sm text-gray-600 bg-gray-50 px-4 py-2 rounded-lg border border-gray-100">
            <span className="flex items-center gap-2"><Clock size={18} className="text-indigo-600"/> 15 días hábiles</span>
            <span className="flex items-center gap-2"><User size={18} className="text-indigo-600"/> Carlos R.C.</span>
          </div>
        </div>

        <div className="space-y-8">
          {sprintData.map((week, index) => {
            const isWeekend = index < sprintData.length - 1 ? isWeekendToday(week.days[week.days.length - 1].date) : false;
            return (
            <React.Fragment key={index}>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <h3 className="font-bold text-gray-800 mb-4 text-xl flex items-center gap-2">
                <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded text-sm">Semana {week.week}</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                {week.days.map((day, dIndex) => {
                  const isDayToday = isToday(day.date);
                  const isFirstGlobal = index === 0 && dIndex === 0;
                  const isLastGlobal = index === sprintData.length - 1 && dIndex === week.days.length - 1;

                  return (
                    <div key={dIndex} className="flex flex-col gap-2">
                      {!isLastGlobal && (
                        <div className="bg-white p-2 rounded-lg border border-gray-200 shadow-sm flex justify-between items-center h-14">
                          <span className="text-xs font-bold text-gray-500">{day.date}</span>
                          <div className="text-right">
                            <div className="text-xs font-bold text-indigo-700">{isFirstGlobal ? 'Sprint Planning' : 'Daily Scrum'}</div>
                            <div className="text-[10px] text-gray-400 flex items-center justify-end gap-1">
                              <Clock size={10} /> {isFirstGlobal ? '2 hrs' : '15 min'}
                            </div>
                          </div>
                        </div>
                      )}
                      <div 
                        onClick={() => setSelectedTask(day)}
                        className={`cursor-pointer transition-all duration-200 transform hover:-translate-y-1 hover:shadow-lg p-4 rounded-xl border-l-4 flex flex-col justify-between h-40 ${getTypeColor(day.type)} ${isDayToday ? 'ring-4 ring-red-500 ring-offset-2 relative animate-jump' : ''}`}
                      >
                        {isDayToday && (
                          <span className="absolute -top-3 -right-2 bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-sm z-10">
                            Hoy
                          </span>
                        )}
                        <div>
                          <div className="flex justify-between items-start mb-2">
                            <span className="font-bold text-sm opacity-70">{day.date}</span>
                            <span className="text-[10px] uppercase font-bold tracking-wider opacity-60 border px-1 rounded">{day.id}</span>
                          </div>
                          <div className="font-bold text-lg leading-tight mb-1">{day.task}</div>
                        </div>
                        <div className="flex justify-between items-center text-xs font-medium opacity-80 mt-2">
                          <span className="flex items-center gap-1"><Clock size={12}/> {day.hours}</span>
                          <span className="bg-white/60 px-2 py-1 rounded shadow-sm">{day.type}</span>
                        </div>
                      </div>
                      {isLastGlobal && (
                        <div className="bg-white p-2 rounded-lg border border-gray-200 shadow-sm flex justify-between items-center h-14">
                          <span className="text-xs font-bold text-gray-500">{day.date}</span>
                          <div className="text-right">
                            <div className="text-[10px] font-bold text-indigo-700 leading-tight">Sprint Review<br></br>Sprint Retrospective</div>
                            <div className="text-[10px] text-gray-400 flex items-center justify-end gap-1">
                              <Clock size={10} /> 3 hrs
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
            {index < sprintData.length - 1 && (
              <div className="relative py-2 flex items-center justify-center">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t-2 border-dashed border-gray-400"></div>
                </div>
                <div className={`relative px-6 py-2 bg-gray-50 rounded-xl border border-gray-300 ${isWeekend ? 'ring-4 ring-red-500 ring-offset-2' : ''} z-10 flex flex-col items-center shadow-sm`}>
                  <span className="text-sm font-bold flex items-center gap-2 text-gray-500">
                    Fin de Semana
                  </span>
                  {isWeekend && <span className="absolute -top-3 -right-2 bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-sm">HOY</span>}
                </div>
              </div>
            )}
            </React.Fragment>
          )})}
        </div>

        <div className="mt-8 flex justify-center gap-6 text-sm text-gray-500">
          <span className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-blue-400"></span> Diseño</span>
          <span className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-emerald-400"></span> Desarrollo</span>
          <span className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-purple-400"></span> Pruebas</span>
          <span className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-amber-400"></span> Revisión</span>
        </div>
      </div>

      {selectedTask && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 transition-opacity">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
            
            <div className="bg-indigo-600 p-6 text-white flex justify-between items-start">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="bg-white/20 px-2 py-1 rounded text-xs font-bold tracking-wider">{selectedTask.id}</span>
                  <span className="flex items-center gap-1 text-xs bg-indigo-500/50 px-2 py-1 rounded"><Clock size={12}/> {selectedTask.date}</span>
                  {isToday(selectedTask.date) && (
                    <span className="bg-red-500 text-white px-2 py-1 rounded text-xs font-bold tracking-wider">HOY</span>
                  )}
                </div>
                <h2 className="text-2xl font-bold">{selectedTask.task}</h2>
                <p className="opacity-90 text-sm mt-1">{selectedTask.owner} • {selectedTask.type}</p>
              </div>
              <button 
                onClick={() => setSelectedTask(null)}
                className="text-white/70 hover:text-white hover:bg-white/20 hover:ring-2 hover:ring-white p-2 rounded-full transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            <div className="p-6 space-y-6 max-h-[70vh] overflow-y-auto">
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                  <div className="flex items-center gap-2 text-indigo-600 font-semibold mb-2 text-sm">
                    <Target size={16}/> OBJETIVO TÉCNICO
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed">{selectedTask.goal}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                  <div className="flex items-center gap-2 text-indigo-600 font-semibold mb-2 text-sm">
                    <Zap size={16}/> PUNTOS DE HISTORIA
                  </div>
                  <p className="text-gray-900 font-bold text-2xl">{selectedTask.storyPoints} <span className="text-sm font-normal text-gray-500">pts</span></p>
                </div>
              </div>

              <div>
                <h4 className="flex items-center gap-2 text-gray-900 font-bold mb-2">
                  <User size={18} className="text-gray-400"/> Historia de Usuario
                </h4>
                <div className="bg-blue-50 text-blue-900 p-4 rounded-lg italic text-sm border-l-4 border-blue-400">
                  "{selectedTask.userStory}"
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="flex items-center gap-2 text-gray-900 font-bold mb-1 text-sm">
                    <FileText size={16} className="text-gray-400"/> ¿Para qué? (Valor)
                  </h4>
                  <p className="text-gray-600 text-sm">{selectedTask.value}</p>
                </div>
                
                <div>
                  <h4 className="flex items-center gap-2 text-gray-900 font-bold mb-2 text-sm">
                    <ShieldCheck size={16} className="text-gray-400"/> Condiciones de Aceptación
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm text-gray-700">
                      <CheckCircle size={16} className="text-emerald-500 mt-0.5 shrink-0"/>
                      {selectedTask.criteria}
                    </li>
                  </ul>
                </div>
              </div>

            </div>

            <div className="bg-gray-50 p-4 border-t flex justify-end">
              <button 
                onClick={() => setSelectedTask(null)}
                className="bg-gray-200 hover:bg-gray-300 hover:ring-2 hover:ring-indigo-600 text-gray-800 px-4 py-2 rounded-lg font-medium transition-colors text-sm"
              >
                Cerrar detalle
              </button>
            </div>

          </div>
        </div>
      )}
    </div>
  );
};

export default SprintCalendar;