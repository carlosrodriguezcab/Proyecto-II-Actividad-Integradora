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
          id: 'T1.1',
          task: 'Inicio maquetación Login y Register', 
          hours: 'Día 1/15', 
          type: 'Dev', 
          owner: 'Carlos R.C.',
          role: 'Frontend Dev',
          tools: 'React, Tailwind CSS',
          activityPoints: 2,
          userStory: 'PB-01: Como residente, quiero registrarme e iniciar sesión para acceder de forma segura.',
          goal: 'Crear los componentes de vista base para la autenticación.',
          value: 'Interfaz necesaria para que el usuario interactúe con el sistema.',
          criteria: 'Formularios maquetados con componentes controlados (useState).'
        },
        { 
          date: 'Mar 03 Feb', 
          id: 'T1.1',
          task: 'Finalización maquetación UI', 
          hours: 'Día 2/15', 
          type: 'Dev', 
          owner: 'Carlos R.C.',
          role: 'Frontend Dev',
          tools: 'React, Tailwind CSS',
          activityPoints: 1,
          userStory: 'PB-01: Como residente, quiero registrarme e iniciar sesión...',
          goal: 'Aplicar estilos finales y responsivos a los formularios.',
          value: 'Mejora visual y de experiencia de usuario en móviles y web.',
          criteria: 'Diseño limpio y ordenado sin errores visuales en 320px+.'
        },
        { 
          date: 'Mié 04 Feb', 
          id: 'T1.2',
          task: 'Configuración firebase.js e Auth', 
          hours: 'Día 3/15', 
          type: 'Dev', 
          owner: 'Carlos R.C.',
          role: 'Backend Dev',
          tools: 'Firebase SDK',
          activityPoints: 3,
          userStory: 'PB-01: Como residente, quiero registrarme e iniciar sesión...',
          goal: 'Conectar la app con el proyecto de Firebase Authentication.',
          value: 'Motor principal de seguridad del sistema.',
          criteria: 'Creación de usuarios reflejada en la consola de Firebase.'
        },
        { 
          date: 'Jue 05 Feb', 
          id: 'T1.3',
          task: 'AuthContext para sesión', 
          hours: 'Día 4/15', 
          type: 'Dev', 
          owner: 'Carlos R.C.',
          role: 'Full-Stack',
          tools: 'React Context API',
          activityPoints: 2,
          userStory: 'PB-01: Como residente, quiero registrarme e iniciar sesión...',
          goal: 'Mantener la sesión del usuario activa en toda la app.',
          value: 'Evita que el usuario tenga que iniciar sesión en cada página.',
          criteria: 'onAuthStateChanged implementado sin fugas de memoria.'
        },
        { 
          date: 'Vie 06 Feb', 
          id: 'T1.4',
          task: 'ProtectedRoute rutas privadas', 
          hours: 'Día 5/15', 
          type: 'Dev', 
          owner: 'Carlos R.C.',
          role: 'Frontend Dev',
          tools: 'React Router DOM',
          activityPoints: 2,
          userStory: 'PB-02: Como administrador, quiero crear y gestionar usuarios...',
          goal: 'Bloquear acceso a URLs si el usuario no está logueado.',
          value: 'Seguridad perimetral en el cliente.',
          criteria: 'Redirección automática a /login si no hay token.'
        },
      ]
    },
    {
      week: 2,
      days: [
        { 
          date: 'Lun 09 Feb', 
          id: 'T1.5',
          task: 'Inicio formulario perfil Firestore', 
          hours: 'Día 6/15', 
          type: 'Dev', 
          owner: 'Carlos R.C.',
          role: 'Frontend Dev',
          tools: 'React Hook Form',
          activityPoints: 2,
          userStory: 'PB-02: Como administrador, quiero crear y gestionar usuarios...',
          goal: 'Crear UI para capturar nombre, depto y teléfono.',
          value: 'Permite recolectar datos reales de los vecinos.',
          criteria: 'Formulario con validación de campos vacíos.'
        },
        { 
          date: 'Mar 10 Feb', 
          id: 'T1.5',
          task: 'Finalización formulario perfil', 
          hours: 'Día 7/15', 
          type: 'Design', 
          owner: 'Carlos R.C.',
          role: 'Frontend Dev',
          tools: 'Tailwind CSS',
          activityPoints: 1,
          userStory: 'PB-02: Como administrador, quiero crear y gestionar usuarios...',
          goal: 'Mejorar el layout del perfil de usuario.',
          value: 'Interfaz intuitiva para actualización de datos.',
          criteria: 'Estilos aplicados y consistentes con el login.'
        },
        { 
          date: 'Mié 11 Feb', 
          id: 'T1.6',
          task: 'Actualización datos (setDoc)', 
          hours: 'Día 8/15', 
          type: 'Dev', 
          owner: 'Carlos R.C.',
          role: 'Backend Dev',
          tools: 'Firestore DB',
          activityPoints: 3,
          userStory: 'PB-02: Como administrador, quiero crear y gestionar usuarios...',
          goal: 'Vincular el formulario Frontend con la escritura en la Nube.',
          value: 'Persistencia de datos del vecino.',
          criteria: 'Documentos guardados exitosamente en la colección "users".'
        },
        { 
          date: 'Jue 12 Feb', 
          id: 'T1.7',
          task: 'Estructura JSON colecciones NoSQL', 
          hours: 'Día 9/15', 
          type: 'Design', 
          owner: 'Carlos R.C.',
          role: 'Backend Dev',
          tools: 'Firebase Console',
          activityPoints: 2,
          userStory: 'PB-09: Como sistema, quiero almacenar información en BD...',
          goal: 'Definir el esquema de datos (Users, Transactions).',
          value: 'Base sólida para el Sprint 2 (Pagos).',
          criteria: 'Estructura NoSQL documentada sin redundancias innecesarias.'
        },
        { 
          date: 'Vie 13 Feb', 
          id: 'T1.7',
          task: 'Finalización estructura en BD', 
          hours: 'Día 10/15', 
          type: 'Dev', 
          owner: 'Carlos R.C.',
          role: 'Backend Dev',
          tools: 'Firestore DB',
          activityPoints: 1,
          userStory: 'PB-09: Como sistema, quiero almacenar información en BD...',
          goal: 'Creación de las colecciones vacías en producción.',
          value: 'Preparación del entorno.',
          criteria: 'Colecciones visibles en Firebase Console.'
        },
      ]
    },
    {
      week: 3,
      days: [
        { 
          date: 'Lun 16 Feb', 
          id: 'T1.8',
          task: 'Reglas de Seguridad Firestore', 
          hours: 'Día 11/15', 
          type: 'Dev', 
          owner: 'Carlos R.C.',
          role: 'Backend Dev',
          tools: 'Firebase Rules',
          activityPoints: 3,
          userStory: 'PB-09: Como sistema, quiero almacenar información en BD...',
          goal: 'Escribir reglas para evitar lectura pública de datos.',
          value: 'Cumplimiento de privacidad y protección de datos.',
          criteria: 'Solo usuarios autenticados pueden leer/escribir.'
        },
        { 
          date: 'Mar 17 Feb', 
          id: 'T1.8',
          task: 'Pruebas Reglas Seguridad', 
          hours: 'Día 12/15', 
          type: 'Test', 
          owner: 'Carlos R.C.',
          role: 'Backend Dev',
          tools: 'Firebase Simulator',
          activityPoints: 2,
          userStory: 'PB-09: Como sistema, quiero almacenar información en BD...',
          goal: 'Verificar vulnerabilidades en las reglas.',
          value: 'Garantía contra inyecciones o robo de datos masivo.',
          criteria: 'Simulador rechaza peticiones anónimas.'
        },
        { 
          date: 'Mié 18 Feb', 
          id: 'T1.9',
          task: 'Carga de Seeders en BD', 
          hours: 'Día 13/15', 
          type: 'Dev', 
          owner: 'Carlos R.C.',
          role: 'Backend Dev',
          tools: 'Script Node.js',
          activityPoints: 2,
          userStory: 'PB-09: Como sistema, quiero almacenar información en BD...',
          goal: 'Poblar la base de datos con usuarios falsos para pruebas.',
          value: 'Facilita la evaluación del sistema sin registros manuales.',
          criteria: 'Script inserta 10 usuarios de prueba automáticamente.'
        },
        { 
          date: 'Jue 19 Feb', 
          id: 'T1.10',
          task: 'Etiquetas semánticas y ARIA', 
          hours: 'Día 14/15', 
          type: 'Design', 
          owner: 'Carlos R.C.',
          role: 'Frontend Dev',
          tools: 'React, Lighthouse',
          activityPoints: 1,
          userStory: 'PB-10: Como usuario, quiero un sistema accesible conforme a WCAG.',
          goal: 'Hacer que lectores de pantalla entiendan el sitio.',
          value: 'Inclusión de usuarios con discapacidades visuales.',
          criteria: 'Score 90+ en accesibilidad en Lighthouse.'
        },
        { 
          date: 'Vie 20 Feb', 
          id: 'T1.11',
          task: 'Navegación por teclado UI', 
          hours: 'Día 15/15', 
          type: 'Test', 
          owner: 'Carlos R.C.',
          role: 'Frontend Dev',
          tools: 'Teclado / Navegador',
          activityPoints: 2,
          userStory: 'PB-10: Como usuario, quiero un sistema accesible...',
          goal: 'Garantizar flujo Tab/Enter en todos los botones e inputs.',
          value: 'Accesibilidad para problemas motrices.',
          criteria: 'Se puede realizar un registro completo sin usar el mouse.'
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
              <strong>Objetivo:</strong> Arquitectura Base y Seguridad (React + Firebase)
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
                      
                      {/* TARJETA DE ACTIVIDAD (Ajustada a h-48 para acomodar más info visualmente igual) */}
                      <div 
                        onClick={() => setSelectedTask(day)}
                        className={`cursor-pointer transition-all duration-200 transform hover:-translate-y-1 hover:shadow-lg p-4 rounded-xl border-l-4 flex flex-col justify-between h-48 ${getTypeColor(day.type)} ${isDayToday ? 'ring-4 ring-red-500 ring-offset-2 relative animate-jump' : ''}`}
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
                          
                          {/* Título de la tarea */}
                          <div className="font-bold text-[15px] leading-tight mb-2 line-clamp-2">{day.task}</div>
                          
                          {/* NUEVO: Información de Responsable y Recursos */}
                          <div className="text-[10px] opacity-80 space-y-1 mt-1 font-medium">
                            <div className="flex items-center gap-1.5 truncate">
                              <User size={12} className="opacity-60"/>
                              {day.owner} <span className="opacity-60">({day.role})</span>
                            </div>
                            <div className="flex items-center gap-1.5 truncate">
                              <Zap size={12} className="opacity-60"/> <p className="opacity-80">Recursos:</p>
                              {day.tools}
                            </div>
                          </div>
                        </div>

                        {/* Pie de tarjeta original */}
                        <div className="flex justify-between items-center text-xs font-medium opacity-80 mt-2 pt-2 border-t border-black/5">
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
          <span className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-blue-400"></span> Diseño / Arquitectura</span>
          <span className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-emerald-400"></span> Desarrollo (Código)</span>
          <span className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-purple-400"></span> Pruebas (QA)</span>
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
                <p className="opacity-90 text-sm mt-1">{selectedTask.owner} ({selectedTask.role}) • Herramientas: {selectedTask.tools}</p>
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
                    <Zap size={16}/> PUNTOS DE ESTA ACTIVIDAD
                  </div>
                  <p className="text-gray-900 font-bold text-2xl">{selectedTask.activityPoints} <span className="text-sm font-normal text-gray-500">pts</span></p>
                </div>
              </div>

              <div>
                <h4 className="flex items-center gap-2 text-gray-900 font-bold mb-2">
                  <User size={18} className="text-gray-400"/> Historia de Usuario Relacionada
                </h4>
                <div className="bg-blue-50 text-blue-900 p-4 rounded-lg italic text-sm border-l-4 border-blue-400">
                  "{selectedTask.userStory}"
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="flex items-center gap-2 text-gray-900 font-bold mb-1 text-sm">
                    <FileText size={16} className="text-gray-400"/> ¿Para qué? (Valor entregado)
                  </h4>
                  <p className="text-gray-600 text-sm">{selectedTask.value}</p>
                </div>
                
                <div>
                  <h4 className="flex items-center gap-2 text-gray-900 font-bold mb-2 text-sm">
                    <ShieldCheck size={16} className="text-gray-400"/> Condiciones de Aceptación (DoD)
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