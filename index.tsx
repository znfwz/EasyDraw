import React, { useState, useEffect, useRef } from 'react';
import { createRoot } from 'react-dom/client';

// --- Icons ---
const TrophyIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
    <path d="M4 22h16" />
    <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
    <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
    <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
  </svg>
);

const UsersIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const ShuffleIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M2 18h1.4c1.3 0 2.5-.6 3.3-1.7l14.2-13.9a3.4 3.4 0 0 1 4.7 4.7L11.4 21c-.8 1.1-2 1.7-3.3 1.7H2" />
    <path d="M2 6h1.4c1.3 0 2.5.6 3.3 1.7l1.7 1.6" />
    <path d="M16.9 14.7l1.7 1.6a3.4 3.4 0 0 1 4.7 4.7" />
  </svg>
);

const PrinterIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polyline points="6 9 6 2 18 2 18 9" />
    <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
    <rect width="12" height="8" x="6" y="14" />
  </svg>
);

const ArrowLeftIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="m12 19-7-7 7-7" />
    <path d="M19 12H5" />
  </svg>
);

const SunIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="5" />
    <path d="M12 1v2" />
    <path d="M12 21v2" />
    <path d="M4.22 4.22l1.42 1.42" />
    <path d="M18.36 18.36l1.42 1.42" />
    <path d="M1 12h2" />
    <path d="M21 12h2" />
    <path d="M4.22 19.78l1.42-1.42" />
    <path d="M18.36 5.64l1.42-1.42" />
  </svg>
);

const MoonIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
);

const ClipboardIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
    <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
  </svg>
);

const PlusIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);

const TrashIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polyline points="3 6 5 6 21 6" />
    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
  </svg>
);

const ClockIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );

const RefreshIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
    <path d="M3 3v5h5" />
    <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" />
    <path d="M16 16h5v5" />
  </svg>
);

const HistoryIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M3 3v5h5" />
      <path d="M3.05 13A9 9 0 1 0 6 5.3L3 8" />
      <path d="M12 7v5l4 2" />
    </svg>
);

const DownloadIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);

const InfoIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="10" />
    <path d="M12 16v-4" />
    <path d="M12 8h.01" />
  </svg>
);

const FileJsonIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <path d="M10 12h4" />
    <path d="M10 16h4" />
  </svg>
);

const UploadIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="17 8 12 3 7 8" />
    <line x1="12" y1="3" x2="12" y2="15" />
  </svg>
);

// --- Types ---
type Step = 'setup' | 'participants' | 'results';
type Language = 'zh' | 'en';
type Theme = 'light' | 'dark';

interface FieldDefinition {
    id: string;
    label: string;
}

interface TournamentConfig {
  name: string;
  type: 'individual' | 'team';
  participantCount: number;
  // Grouping Strategy
  groupStrategy: 'count' | 'field'; 
  groupCount: number; // Used when strategy is 'count'
  groupingFieldId?: string; // Used when strategy is 'field'
  
  fields: FieldDefinition[];
  primaryFieldId: string; // The ID of the field to display prominently
}

interface Participant {
  id: number;
  values: Record<string, string>;
}

interface Group {
  id: number; // or string if grouped by field
  name: string;
  participants: Participant[];
}

interface HistoryItem {
    id: string;
    timestamp: number;
    config: TournamentConfig;
    groups: Group[];
    participants: Participant[]; // Need to save participants state too
}

interface ExportData {
    version: string;
    timestamp: number;
    config: TournamentConfig;
    participants: Participant[];
    groups?: Group[];
    drawTime?: string;
}

// --- Translations ---
const i18n = {
  zh: {
    appTitle: "抽签君",
    step1: "设置",
    step2: "名单",
    step3: "结果",
    setupTitle: "比赛设置",
    tournamentName: "比赛名称",
    tournamentNamePlaceholder: "例如：2024公司羽毛球赛",
    drawType: "抽签类型",
    individual: "个人赛",
    team: "团体赛",
    totalParticipants: "参赛人数",
    totalTeams: "队伍数量",
    groupStrategy: "分组策略",
    strategyCount: "按数量随机分组",
    strategyField: "按字段分类分组",
    groupCount: "分组数量",
    groupingField: "选择分组依据字段",
    groupingFieldHint: "系统将根据此字段的相同值自动归类，无需设置组数。",
    fieldsSetup: "参赛信息字段设置",
    fieldsHeaderPrimary: "主字段",
    fieldsHeaderName: "字段名称",
    addField: "添加字段",
    nextBtn: "下一步：录入名单",
    participantsTitle: "录入参赛名单",
    participantsSubtitle: "手动输入或使用批量录入",
    clearAll: "清空所有",
    autoGenerate: "自动生成",
    batchInput: "批量录入",
    batchInputTitle: "批量录入名单",
    batchInputPlaceholder: "在此粘贴数据。\n支持从Excel复制（制表符分隔）或CSV格式。\n例如：\n张三    清华大学    量子物理\n李四    北京大学    中国文学",
    batchHelp: "当前限制 {count} 人。数据将按字段顺序自动填充。",
    importBtn: "导入",
    cancelBtn: "取消",
    playerPrefix: "选手",
    teamPrefix: "队伍",
    startDraw: "开始生成分组",
    resultsInfo: "{count}{unit} • {groups}个小组",
    resultsInfoRandom: "随机分配",
    resultsInfoField: "按 {field} 分组",
    drawTime: "生成时间",
    unitPeople: "人",
    unitTeams: "队",
    newDraw: "重新开始",
    redrawBtn: "重新抽签",
    printBtn: "打印 / PDF",
    exportBtn: "导出 Excel",
    exportJsonBtn: "导出 JSON",
    importJsonBtn: "导入配置",
    importSuccess: "导入成功！",
    importError: "文件格式无效。",
    generatedBy: "由抽签君生成",
    drawResults: "抽签结果",
    footer: "© 2025 抽签君",
    memberCount: "成员",
    groupNameTemplate: "{n}组", // e.g. A组
    stepCounter: "步骤 {current}/3: {name}",
    fieldLabel: "字段名称",
    primaryTooltip: "主字段将在结果中突出显示",
    shuffling: "正在随机抽签...",
    historyBtn: "历史记录",
    historyTitle: "抽签历史记录",
    historyEmpty: "暂无历史记录",
    restoreBtn: "查看/恢复",
    deleteBtn: "删除",
    savedAt: "保存于",
    groupColumn: "分组",
    close: "关闭",
  },
  en: {
    appTitle: "EasyDraw",
    step1: "Setup",
    step2: "Participants",
    step3: "Results",
    setupTitle: "Tournament Setup",
    tournamentName: "Tournament Name",
    tournamentNamePlaceholder: "e.g. 2024 Company Badminton Cup",
    drawType: "Draw Type",
    individual: "Individual",
    team: "Team",
    totalParticipants: "Total Participants",
    totalTeams: "Total Teams",
    groupStrategy: "Grouping Strategy",
    strategyCount: "Random by Group Count",
    strategyField: "Group by Field Value",
    groupCount: "Number of Groups",
    groupingField: "Group By Field",
    groupingFieldHint: "Participants with the same value in this field will be grouped together.",
    fieldsSetup: "Participant Fields Setup",
    fieldsHeaderPrimary: "Primary",
    fieldsHeaderName: "Field Name",
    addField: "Add Field",
    nextBtn: "Next: Enter Participants",
    participantsTitle: "Enter Participants",
    participantsSubtitle: "Fill in details manually or use batch input.",
    clearAll: "Clear All",
    autoGenerate: "Auto-Generate",
    batchInput: "Batch Input",
    batchInputTitle: "Batch Input Data",
    batchInputPlaceholder: "Paste data here.\nSupports Excel copy (tab-separated) or CSV.\nExample:\nJohn Doe    MIT    Physics\nJane Smith  Stanford   Literature",
    batchHelp: "Limited to {count} participants. Data fills fields in order.",
    importBtn: "Import",
    cancelBtn: "Cancel",
    playerPrefix: "Player",
    teamPrefix: "Team",
    startDraw: "Generate Groups",
    resultsInfo: "{count} {unit} • {groups} Groups",
    resultsInfoRandom: "Random Allocation",
    resultsInfoField: "Grouped by {field}",
    drawTime: "Time",
    unitPeople: "Players",
    unitTeams: "Teams",
    newDraw: "New Draw",
    redrawBtn: "Redraw",
    printBtn: "Print / PDF",
    exportBtn: "Export Excel",
    exportJsonBtn: "Export JSON",
    importJsonBtn: "Import Config",
    importSuccess: "Import successful!",
    importError: "Invalid file format.",
    generatedBy: "Generated by EasyDraw",
    drawResults: "Draw Results",
    footer: "© 2025 EasyDraw Tournament System. MVP Version.",
    memberCount: "Participants",
    groupNameTemplate: "Group {n}",
    stepCounter: "Step {current}/3: {name}",
    fieldLabel: "Field Name",
    primaryTooltip: "Primary field is highlighted in results",
    shuffling: "Shuffling Participants...",
    historyBtn: "History",
    historyTitle: "Draw History",
    historyEmpty: "No history found",
    restoreBtn: "View/Restore",
    deleteBtn: "Delete",
    savedAt: "Saved",
    groupColumn: "Group",
    close: "Close",
  }
};

// --- Utils ---
function shuffleArray<T>(array: T[]): T[] {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

function generateId() {
    return Math.random().toString(36).substring(2, 9);
}

// --- Components ---

function DrawingAnimation({ 
    participants, 
    primaryFieldId, 
    t 
}: { 
    participants: Participant[], 
    primaryFieldId: string,
    t: (key: keyof typeof i18n.en) => string 
}) {
    const [currentName, setCurrentName] = useState("");
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        // Name cycling effect
        const nameInterval = setInterval(() => {
            if (participants.length > 0) {
                const randomP = participants[Math.floor(Math.random() * participants.length)];
                const name = randomP.values[primaryFieldId] || `ID: ${randomP.id}`;
                setCurrentName(name);
            }
        }, 80);

        // Progress bar effect
        const progressInterval = setInterval(() => {
            setProgress(old => {
                if (old >= 100) return 100;
                // Non-linear progress for better feel
                return old + (Math.random() * 5);
            });
        }, 50);

        return () => {
            clearInterval(nameInterval);
            clearInterval(progressInterval);
        };
    }, [participants, primaryFieldId]);

    return (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gray-900/90 backdrop-blur-sm text-white animate-fade-in">
            <div className="relative mb-8">
                <div className="absolute inset-0 bg-blue-500 rounded-full opacity-20 animate-ping"></div>
                <div className="bg-white/10 p-6 rounded-full backdrop-blur-md border border-white/20 shadow-2xl relative">
                     <ShuffleIcon className="w-16 h-16 text-blue-400 animate-spin-slow" />
                </div>
            </div>
            
            <h2 className="text-3xl font-bold mb-2 tracking-tight">{t('shuffling')}</h2>
            
            <div className="h-8 mb-8 text-xl font-mono text-blue-300 min-w-[200px] text-center">
                {currentName}
            </div>

            <div className="w-64 h-2 bg-gray-700 rounded-full overflow-hidden">
                <div 
                    className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-75 ease-out"
                    style={{ width: `${Math.min(progress, 100)}%` }}
                ></div>
            </div>
        </div>
    );
}

function HistoryModal({
    isOpen,
    onClose,
    history,
    onRestore,
    onDelete,
    t
}: {
    isOpen: boolean;
    onClose: () => void;
    history: HistoryItem[];
    onRestore: (item: HistoryItem) => void;
    onDelete: (id: string) => void;
    t: (key: keyof typeof i18n.en) => string;
}) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 animate-fade-in">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl w-full max-w-2xl max-h-[80vh] flex flex-col animate-scale-in">
                <div className="p-6 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                        <HistoryIcon className="w-5 h-5 text-blue-600" />
                        {t('historyTitle')}
                    </h3>
                    <button onClick={onClose} className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200">
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                
                <div className="overflow-y-auto flex-1 p-6">
                    {history.length === 0 ? (
                        <div className="text-center py-12 text-gray-500 dark:text-gray-400">
                            <HistoryIcon className="w-12 h-12 mx-auto mb-3 opacity-20" />
                            <p>{t('historyEmpty')}</p>
                        </div>
                    ) : (
                        <div className="space-y-4">
                            {history.map((item) => (
                                <div key={item.id} className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4 border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-700 transition-colors">
                                    <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4">
                                        <div>
                                            <h4 className="font-bold text-gray-900 dark:text-white mb-1">
                                                {item.config.name}
                                            </h4>
                                            <div className="text-sm text-gray-500 dark:text-gray-400 flex flex-wrap gap-x-4 gap-y-1">
                                                <span>{new Date(item.timestamp).toLocaleString()}</span>
                                                <span>•</span>
                                                <span>{item.config.participantCount} {t(item.config.type === 'individual' ? 'unitPeople' : 'unitTeams')}</span>
                                                <span>•</span>
                                                <span>{item.groups.length} {t('groupCount')}</span>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <button 
                                                onClick={() => {
                                                    onRestore(item);
                                                    onClose();
                                                }}
                                                className="px-3 py-1.5 bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 rounded-md text-sm font-medium hover:bg-blue-200 dark:hover:bg-blue-900/60 transition-colors"
                                            >
                                                {t('restoreBtn')}
                                            </button>
                                            <button 
                                                onClick={() => onDelete(item.id)}
                                                className="p-1.5 text-gray-400 hover:text-red-500 dark:hover:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-md transition-colors"
                                            >
                                                <TrashIcon className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

function SetupStep({ 
  config, 
  onConfigChange, 
  onNext,
  onImport,
  t
}: { 
  config: TournamentConfig; 
  onConfigChange: (c: TournamentConfig) => void; 
  onNext: () => void; 
  onImport: (e: React.ChangeEvent<HTMLInputElement>) => void;
  t: (key: keyof typeof i18n.en) => string;
}) {
  const isCountValid = config.groupStrategy === 'count' ? (config.groupCount > 0 && config.groupCount <= config.participantCount) : true;
  const isFieldValid = config.groupStrategy === 'field' ? !!config.groupingFieldId : true;
  const isValid = config.name.trim().length > 0 && config.participantCount > 0 && isCountValid && isFieldValid;
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFieldChange = (id: string, newLabel: string) => {
      const updatedFields = config.fields.map(f => f.id === id ? { ...f, label: newLabel } : f);
      onConfigChange({ ...config, fields: updatedFields });
  };

  const addField = () => {
      const newField = { id: generateId(), label: '' };
      onConfigChange({ ...config, fields: [...config.fields, newField] });
  };

  const removeField = (id: string) => {
      if (config.fields.length <= 1) return;
      const updatedFields = config.fields.filter(f => f.id !== id);
      
      let newPrimary = config.primaryFieldId;
      if (config.primaryFieldId === id) {
          newPrimary = updatedFields[0].id;
      }

      let newGroupingField = config.groupingFieldId;
      if (config.groupingFieldId === id) {
          newGroupingField = undefined; // Reset if removed
      }

      onConfigChange({ 
          ...config, 
          fields: updatedFields,
          primaryFieldId: newPrimary,
          groupingFieldId: newGroupingField
      });
  };

  const setPrimaryField = (id: string) => {
      onConfigChange({ ...config, primaryFieldId: id });
  };

  return (
    <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 animate-fade-in transition-colors">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center gap-2">
        <TrophyIcon className="text-blue-600" /> 
        {t('setupTitle')}
      </h2>
      
      <div className="space-y-6">
        {/* Basic Info */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{t('tournamentName')}</label>
          <input
            type="text"
            value={config.name}
            onChange={(e) => onConfigChange({ ...config, name: e.target.value })}
            placeholder={t('tournamentNamePlaceholder')}
            className="w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:placeholder-gray-400 transition-all outline-none"
          />
        </div>

        <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{t('drawType')}</label>
              <div className="flex rounded-lg border border-gray-300 dark:border-gray-600 overflow-hidden">
                <button
                  onClick={() => onConfigChange({ ...config, type: 'individual' })}
                  className={`flex-1 py-2 text-sm font-medium transition-colors ${
                    config.type === 'individual' 
                      ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300' 
                      : 'bg-white dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-50'
                  }`}
                >
                  {t('individual')}
                </button>
                <div className="w-px bg-gray-300 dark:bg-gray-600"></div>
                <button
                  onClick={() => onConfigChange({ ...config, type: 'team' })}
                  className={`flex-1 py-2 text-sm font-medium transition-colors ${
                    config.type === 'team' 
                      ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300' 
                      : 'bg-white dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-50'
                  }`}
                >
                  {t('team')}
                </button>
              </div>
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                {config.type === 'individual' ? t('totalParticipants') : t('totalTeams')}
                </label>
                <input
                type="number"
                min="2"
                max="200"
                value={config.participantCount}
                onChange={(e) => onConfigChange({ ...config, participantCount: parseInt(e.target.value) || 0 })}
                className="w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                />
            </div>
        </div>

        {/* Grouping Strategy */}
        <div className="bg-gray-50 dark:bg-gray-700/30 p-4 rounded-lg border border-gray-200 dark:border-gray-600">
             <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">{t('groupStrategy')}</label>
             <div className="flex flex-col gap-3">
                 <label className="flex items-center gap-3 cursor-pointer">
                     <input 
                        type="radio" 
                        name="groupStrategy" 
                        checked={config.groupStrategy === 'count'} 
                        onChange={() => onConfigChange({ ...config, groupStrategy: 'count' })}
                        className="w-4 h-4 text-blue-600"
                     />
                     <span className="text-gray-800 dark:text-gray-200">{t('strategyCount')}</span>
                 </label>
                 
                 {config.groupStrategy === 'count' && (
                     <div className="ml-7 mb-2">
                        <label className="block text-xs text-gray-500 dark:text-gray-400 mb-1">{t('groupCount')}</label>
                        <input
                            type="number"
                            min="1"
                            max={config.participantCount}
                            value={config.groupCount}
                            onChange={(e) => onConfigChange({ ...config, groupCount: parseInt(e.target.value) || 0 })}
                            className="w-32 px-3 py-1.5 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white rounded-md text-sm outline-none focus:ring-1 focus:ring-blue-500"
                        />
                     </div>
                 )}

                 <label className="flex items-center gap-3 cursor-pointer">
                     <input 
                        type="radio" 
                        name="groupStrategy" 
                        checked={config.groupStrategy === 'field'} 
                        onChange={() => onConfigChange({ ...config, groupStrategy: 'field', groupingFieldId: config.groupingFieldId || config.fields[1]?.id || config.fields[0].id })}
                        className="w-4 h-4 text-blue-600"
                     />
                     <span className="text-gray-800 dark:text-gray-200">{t('strategyField')}</span>
                 </label>

                 {config.groupStrategy === 'field' && (
                     <div className="ml-7">
                        <label className="block text-xs text-gray-500 dark:text-gray-400 mb-1">{t('groupingField')}</label>
                        <select
                            value={config.groupingFieldId || ''}
                            onChange={(e) => onConfigChange({ ...config, groupingFieldId: e.target.value })}
                            className="w-full max-w-xs px-3 py-1.5 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white rounded-md text-sm outline-none focus:ring-1 focus:ring-blue-500"
                        >
                            {config.fields.map(f => (
                                <option key={f.id} value={f.id}>{f.label || '(Unnamed Field)'}</option>
                            ))}
                        </select>
                        <p className="text-xs text-gray-500 mt-1">{t('groupingFieldHint')}</p>
                     </div>
                 )}
             </div>
        </div>

        {/* Field Setup */}
        <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
            <div className="flex justify-between items-center mb-4">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">{t('fieldsSetup')}</label>
                <button 
                    onClick={addField}
                    className="text-sm flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors"
                >
                    <PlusIcon className="w-4 h-4" /> {t('addField')}
                </button>
            </div>
            
            <div className="grid grid-cols-[auto_1fr_auto] gap-x-4 gap-y-2 mb-2 px-1">
                 <div className="flex items-center justify-center gap-1 text-xs font-semibold text-gray-500 dark:text-gray-400 text-center px-1 cursor-help" title={t('primaryTooltip')}>
                    {t('fieldsHeaderPrimary')}
                    <InfoIcon className="w-3 h-3" />
                 </div>
                 <div className="text-xs font-semibold text-gray-500 dark:text-gray-400">{t('fieldsHeaderName')}</div>
                 <div></div>
            </div>

            <div className="space-y-3">
                {config.fields.map((field, index) => (
                    <div key={field.id} className="grid grid-cols-[auto_1fr_auto] items-center gap-4 animate-fade-in">
                        <div className="flex justify-center w-8">
                            <input 
                                type="radio" 
                                name="primaryField" 
                                checked={config.primaryFieldId === field.id}
                                onChange={() => setPrimaryField(field.id)}
                                className="w-4 h-4 text-blue-600 cursor-pointer"
                                title={t('primaryTooltip')}
                            />
                        </div>
                        <input
                            type="text"
                            value={field.label}
                            onChange={(e) => handleFieldChange(field.id, e.target.value)}
                            placeholder={t('fieldLabel')}
                            className="w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white rounded-md focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm"
                        />
                        <button 
                            onClick={() => removeField(field.id)}
                            disabled={config.fields.length <= 1}
                            className={`p-2 rounded-md transition-colors ${
                                config.fields.length <= 1 
                                ? 'text-gray-300 dark:text-gray-600 cursor-not-allowed' 
                                : 'text-gray-500 hover:bg-red-50 hover:text-red-600 dark:text-gray-400 dark:hover:bg-red-900/20'
                            }`}
                        >
                            <TrashIcon className="w-4 h-4" />
                        </button>
                    </div>
                ))}
            </div>
        </div>

        <div className="flex gap-4">
             <input 
                type="file" 
                ref={fileInputRef} 
                onChange={onImport} 
                accept=".json" 
                className="hidden" 
             />
             <button
                onClick={() => fileInputRef.current?.click()}
                className="px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors flex items-center gap-2"
            >
                <UploadIcon className="w-4 h-4" /> {t('importJsonBtn')}
            </button>
            <button
                onClick={onNext}
                disabled={!isValid}
                className={`flex-1 py-3 px-4 rounded-lg font-semibold text-white transition-all shadow-md ${
                    isValid 
                    ? 'bg-blue-600 hover:bg-blue-700 hover:shadow-lg transform hover:-translate-y-0.5' 
                    : 'bg-gray-300 dark:bg-gray-700 dark:text-gray-500 cursor-not-allowed'
                }`}
                >
                {t('nextBtn')}
            </button>
        </div>
      </div>
    </div>
  );
}

function ParticipantsStep({
  config,
  participants,
  onParticipantsChange,
  onNext,
  onBack,
  onExportJSON,
  t
}: {
  config: TournamentConfig;
  participants: Participant[];
  onParticipantsChange: (p: Participant[]) => void;
  onNext: () => void;
  onBack: () => void;
  onExportJSON: () => void;
  t: (key: keyof typeof i18n.en) => string;
}) {
  const [showBatch, setShowBatch] = useState(false);
  const [batchText, setBatchText] = useState("");

  const updateParticipant = (id: number, fieldId: string, value: string) => {
    const newParticipants = participants.map(p =>
      p.id === id ? { ...p, values: { ...p.values, [fieldId]: value } } : p
    );
    onParticipantsChange(newParticipants);
  };

  const clearAll = () => {
    if (confirm("Are you sure?")) {
      const newParticipants = participants.map(p => ({ ...p, values: {} }));
      onParticipantsChange(newParticipants);
    }
  };

  const autoGenerate = () => {
    const newParticipants = participants.map(p => {
        const newValues: Record<string, string> = {};
        config.fields.forEach(f => {
            if (f.id === config.primaryFieldId) {
                newValues[f.id] = `${t(config.type === 'individual' ? 'playerPrefix' : 'teamPrefix')} ${p.id}`;
            } else {
                 if (f.label.includes('School') || f.label.includes('学校')) newValues[f.id] = `School ${String.fromCharCode(65 + Math.floor(Math.random() * 5))}`;
                 else if (f.label.includes('Topic') || f.label.includes('题目')) newValues[f.id] = `Topic ${Math.floor(Math.random() * 10) + 1}`;
                 else newValues[f.id] = `-`;
            }
        });
        return { ...p, values: newValues };
    });
    onParticipantsChange(newParticipants);
  };

  const handleBatchImport = () => {
      if (!batchText.trim()) return;

      const lines = batchText.trim().split('\n');
      const newParticipants = [...participants];
      
      let currentIdx = 0;
      
      for (let i = 0; i < lines.length && currentIdx < newParticipants.length; i++) {
           const line = lines[i].trim();
           if (!line) continue;

           // Split by tab or comma (simple CSV detection)
           const parts = line.includes('\t') ? line.split('\t') : line.split(',');
           
           const vals: Record<string, string> = {};
           config.fields.forEach((f, index) => {
               if (parts[index]) {
                   vals[f.id] = parts[index].trim();
               }
           });
           
           newParticipants[currentIdx] = {
               ...newParticipants[currentIdx],
               values: { ...newParticipants[currentIdx].values, ...vals }
           };
           currentIdx++;
      }
      
      onParticipantsChange(newParticipants);
      setShowBatch(false);
      setBatchText("");
  };

  const isEmpty = participants.every(p => Object.keys(p.values).length === 0);

  return (
    <div className="max-w-4xl mx-auto space-y-6 animate-fade-in">
       {/* Header */}
       <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
           <div>
               <h2 className="text-2xl font-bold text-gray-800 dark:text-white flex items-center gap-2">
                   <UsersIcon className="text-blue-600" />
                   {t('participantsTitle')}
               </h2>
               <p className="text-gray-500 dark:text-gray-400 mt-1">
                   {t('participantsSubtitle')} ({participants.length}/{config.participantCount})
               </p>
           </div>
           <div className="flex flex-wrap gap-2">
               <button onClick={clearAll} disabled={isEmpty} className="px-3 py-2 text-sm text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors border border-transparent hover:border-red-200 disabled:opacity-50">
                   {t('clearAll')}
               </button>
               <button onClick={autoGenerate} className="px-3 py-2 text-sm text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors border border-transparent hover:border-blue-200">
                   {t('autoGenerate')}
               </button>
               <button onClick={() => setShowBatch(true)} className="px-3 py-2 text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors flex items-center gap-2">
                   <ClipboardIcon className="w-4 h-4" />
                   {t('batchInput')}
               </button>
                <button onClick={onExportJSON} className="px-3 py-2 text-sm bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-300 rounded-lg hover:bg-purple-100 dark:hover:bg-purple-900/40 transition-colors flex items-center gap-2 border border-transparent hover:border-purple-200">
                   <FileJsonIcon className="w-4 h-4" />
                   {t('exportJsonBtn')}
               </button>
           </div>
       </div>

       {/* Batch Input Modal */}
       {showBatch && (
           <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
               <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl w-full max-w-2xl p-6 animate-scale-in">
                   <h3 className="text-lg font-bold mb-2 dark:text-white">{t('batchInputTitle')}</h3>
                   <p className="text-sm text-gray-500 mb-4 dark:text-gray-400 whitespace-pre-line">{t('batchInputPlaceholder')}</p>
                   <textarea
                       className="w-full h-64 p-4 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg font-mono text-sm focus:ring-2 focus:ring-blue-500 outline-none dark:text-gray-200 resize-none"
                       placeholder="Paste here..."
                       value={batchText}
                       onChange={e => setBatchText(e.target.value)}
                   />
                    <p className="text-xs text-gray-400 mt-2">{t('batchHelp').replace('{count}', config.participantCount.toString())}</p>
                   <div className="flex justify-end gap-3 mt-4">
                       <button onClick={() => setShowBatch(false)} className="px-4 py-2 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">{t('cancelBtn')}</button>
                       <button onClick={handleBatchImport} disabled={!batchText.trim()} className="px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 rounded-lg disabled:opacity-50">{t('importBtn')}</button>
                   </div>
               </div>
           </div>
       )}

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden mb-8">
            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-gray-50 dark:bg-gray-700/50 border-b border-gray-200 dark:border-gray-700">
                            <th className="p-3 w-16 text-center text-xs font-semibold text-gray-500 uppercase">#</th>
                            {config.fields.map(field => (
                                <th key={field.id} className={`p-3 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase ${field.id === config.primaryFieldId ? 'bg-blue-50 dark:bg-blue-900/20' : ''}`}>
                                    {field.label} {field.id === config.primaryFieldId && <span className="text-blue-500">*</span>}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                        {participants.map((p, idx) => (
                            <tr key={p.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/30 transition-colors group">
                                <td className="p-3 text-center text-sm text-gray-400 font-mono">{idx + 1}</td>
                                {config.fields.map(field => (
                                    <td key={field.id} className={`p-2 ${field.id === config.primaryFieldId ? 'bg-blue-50/50 dark:bg-blue-900/10' : ''}`}>
                                        <input
                                            type="text"
                                            value={p.values[field.id] || ''}
                                            onChange={(e) => updateParticipant(p.id, field.id, e.target.value)}
                                            className={`w-full bg-transparent border-b border-transparent focus:border-blue-500 outline-none py-1 px-2 text-sm transition-all ${
                                                field.id === config.primaryFieldId 
                                                ? 'font-bold text-gray-900 dark:text-white' 
                                                : 'text-gray-600 dark:text-gray-300'
                                            } ${!p.values[field.id] && 'group-hover:border-gray-200 dark:group-hover:border-gray-600'}`}
                                            placeholder={field.label}
                                        />
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>

        <div className="flex gap-4">
            <button
                onClick={onBack}
                className="px-6 py-3 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors flex items-center gap-2"
            >
                <ArrowLeftIcon className="w-4 h-4" /> {t('step1')}
            </button>
            <button
                onClick={onNext}
                className="flex-1 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2"
            >
                <ShuffleIcon className="w-5 h-5" /> {t('startDraw')}
            </button>
        </div>
    </div>
  );
}

function ResultsStep({
    config,
    groups,
    drawTime,
    onReset,
    onRedraw,
    onExportJSON,
    t
}: {
    config: TournamentConfig;
    groups: Group[];
    drawTime: Date | null;
    onReset: () => void;
    onRedraw: () => void;
    onExportJSON: () => void;
    t: (key: keyof typeof i18n.en) => string;
}) {
    const componentRef = useRef<HTMLDivElement>(null);
    const [isExporting, setIsExporting] = useState(false);

    const handlePrint = () => {
        window.print();
    };

    const handleExportExcel = async () => {
        setIsExporting(true);
        try {
            // Dynamically import xlsx from esm.sh
            const XLSX = await import('xlsx');
            
            // Flatten data for Excel
            const rows: any[] = [];
            groups.forEach(group => {
                group.participants.forEach((p, index) => {
                    const row: any = {
                        [t('groupColumn')]: group.name,
                        '#': index + 1
                    };
                    
                    config.fields.forEach(f => {
                        row[f.label] = p.values[f.id] || '';
                    });
                    
                    rows.push(row);
                });
            });

            // Create workbook and worksheet
            const worksheet = XLSX.utils.json_to_sheet(rows);
            const workbook = XLSX.utils.book_new();
            XLSX.utils.book_append_sheet(workbook, worksheet, "Results");

            // Generate filename
            const dateStr = new Date().toISOString().slice(0, 10);
            const safeName = config.name.replace(/[^a-z0-9]/gi, '_').toLowerCase() || 'tournament';
            XLSX.writeFile(workbook, `${safeName}_${dateStr}.xlsx`);
            
        } catch (error) {
            console.error("Export failed:", error);
            alert("Failed to export Excel. Please check your internet connection.");
        } finally {
            setIsExporting(false);
        }
    };

    const formatTime = (date: Date) => {
        return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    };

    return (
        <div className="max-w-6xl mx-auto animate-fade-in" ref={componentRef}>
             <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4 no-print">
                <div>
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{t('drawResults')}</h2>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-500 dark:text-gray-400">
                        <span className="flex items-center gap-1.5">
                            <ClockIcon className="w-4 h-4" /> 
                            {drawTime && formatTime(drawTime)}
                        </span>
                        <span className="flex items-center gap-1.5">
                            <UsersIcon className="w-4 h-4" /> 
                            {t('resultsInfo')
                                .replace('{count}', config.participantCount.toString())
                                .replace('{unit}', t(config.type === 'individual' ? 'unitPeople' : 'unitTeams'))
                                .replace('{groups}', groups.length.toString())
                            }
                        </span>
                        <span className="px-2 py-0.5 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 text-xs font-medium border border-blue-200 dark:border-blue-800">
                            {config.groupStrategy === 'count' 
                                ? t('resultsInfoRandom') 
                                : t('resultsInfoField').replace('{field}', config.fields.find(f => f.id === config.groupingFieldId)?.label || '')}
                        </span>
                    </div>
                </div>
                <div className="flex gap-3 flex-wrap">
                    <button 
                        onClick={onReset}
                        className="px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors shadow-sm"
                    >
                        {t('newDraw')}
                    </button>
                    <button 
                        onClick={onRedraw}
                        className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium shadow-md transition-colors flex items-center gap-2"
                    >
                        <RefreshIcon className="w-4 h-4" /> {t('redrawBtn')}
                    </button>
                    <button 
                        onClick={onExportJSON}
                        className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium shadow-md transition-colors flex items-center gap-2"
                    >
                        <FileJsonIcon className="w-4 h-4" /> {t('exportJsonBtn')}
                    </button>
                    <button 
                        onClick={handleExportExcel}
                        disabled={isExporting}
                        className={`px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium shadow-md transition-colors flex items-center gap-2 ${isExporting ? 'opacity-70 cursor-wait' : ''}`}
                    >
                        <DownloadIcon className="w-4 h-4" /> {isExporting ? '...' : t('exportBtn')}
                    </button>
                    <button 
                        onClick={handlePrint}
                        className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium shadow-md transition-colors flex items-center gap-2"
                    >
                        <PrinterIcon className="w-4 h-4" /> {t('printBtn')}
                    </button>
                </div>
             </div>

             <div className="hidden print:block mb-8 text-center">
                 <h1 className="text-2xl font-bold mb-2">{config.name} - {t('drawResults')}</h1>
                 <p className="text-sm text-gray-600">
                    {drawTime?.toLocaleString()} • {t('generatedBy')}
                 </p>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                 {groups.map(group => (
                     <div key={group.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden break-inside-avoid print:border-gray-300">
                         <div className="bg-gray-50 dark:bg-gray-700/50 px-4 py-3 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
                             <h3 className="font-bold text-gray-800 dark:text-white truncate" title={group.name}>{group.name}</h3>
                             <span className="text-xs font-medium text-gray-500 bg-white dark:bg-gray-600 px-2 py-0.5 rounded-full border border-gray-200 dark:border-gray-500">
                                {group.participants.length}
                             </span>
                         </div>
                         <div className="p-2">
                             {group.participants.length > 0 ? (
                                <ul className="space-y-1">
                                    {group.participants.map((p, idx) => (
                                        <li key={p.id} className="flex items-start gap-3 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                                            <span className="text-gray-400 font-mono text-sm w-5 text-right mt-0.5">{idx + 1}.</span>
                                            <div className="flex-1 min-w-0">
                                                <div className="font-medium text-gray-900 dark:text-white truncate">
                                                    {p.values[config.primaryFieldId] || <span className="text-gray-400 italic">No Name</span>}
                                                </div>
                                                <div className="text-xs text-gray-500 dark:text-gray-400 truncate mt-0.5">
                                                    {config.fields
                                                        .filter(f => f.id !== config.primaryFieldId)
                                                        .map(f => p.values[f.id])
                                                        .filter(Boolean)
                                                        .join(' • ')}
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                             ) : (
                                 <div className="text-center py-8 text-gray-400 text-sm italic">Empty Group</div>
                             )}
                         </div>
                     </div>
                 ))}
             </div>
        </div>
    );
}

const App = () => {
  const [step, setStep] = useState<Step>('setup');
  const [lang, setLang] = useState<Language>('zh');
  const [theme, setTheme] = useState<Theme>('light');
  const [isDrawing, setIsDrawing] = useState(false);
  const [showHistory, setShowHistory] = useState(false);
  const [history, setHistory] = useState<HistoryItem[]>([]);
  
  const [config, setConfig] = useState<TournamentConfig>({
    name: '',
    type: 'individual',
    participantCount: 32,
    groupStrategy: 'count',
    groupCount: 4,
    primaryFieldId: 'f_name',
    fields: [
        { id: 'f_name', label: '姓名' },
        { id: 'f_school', label: '学校' },
        { id: 'f_topic', label: '题目' }
    ]
  });

  const [participants, setParticipants] = useState<Participant[]>([]);
  const [groups, setGroups] = useState<Group[]>([]);
  const [drawTime, setDrawTime] = useState<Date | null>(null);

  // Load History from localStorage
  useEffect(() => {
    try {
        const savedHistory = localStorage.getItem('draw_history');
        if (savedHistory) {
            setHistory(JSON.parse(savedHistory));
        }
    } catch (e) {
        console.error('Failed to load history', e);
    }
  }, []);

  // Save History to localStorage
  const addToHistory = (newConfig: TournamentConfig, newGroups: Group[], newParticipants: Participant[]) => {
      const now = Date.now();
      const newItem: HistoryItem = {
          id: `${now}-${generateId()}`,
          timestamp: now,
          config: newConfig,
          groups: newGroups,
          participants: newParticipants
      };
      
      const updatedHistory = [newItem, ...history];
      // Limit to 20 items to avoid storage issues
      if (updatedHistory.length > 20) updatedHistory.pop();
      
      setHistory(updatedHistory);
      localStorage.setItem('draw_history', JSON.stringify(updatedHistory));
  };

  const deleteHistoryItem = (id: string) => {
      const updated = history.filter(h => h.id !== id);
      setHistory(updated);
      localStorage.setItem('draw_history', JSON.stringify(updated));
  };

  const restoreHistoryItem = (item: HistoryItem) => {
      setConfig(item.config);
      setGroups(item.groups);
      setParticipants(item.participants);
      setDrawTime(new Date(item.timestamp));
      setStep('results');
  };

  // Keep fields localized when switching languages if they are default
  useEffect(() => {
    if (step === 'setup') {
        const isDefaultFields = config.fields.length === 3 && 
            ['姓名', 'Name'].includes(config.fields[0].label) &&
            ['学校', 'School'].includes(config.fields[1].label) &&
            ['题目', 'Topic'].includes(config.fields[2].label);

        if (isDefaultFields) {
            const newFields = [
                { id: 'f_name', label: lang === 'zh' ? '姓名' : 'Name' },
                { id: 'f_school', label: lang === 'zh' ? '学校' : 'School' },
                { id: 'f_topic', label: lang === 'zh' ? '题目' : 'Topic' }
            ];
            setConfig(prev => ({
                ...prev,
                fields: newFields
            }));
        }
    }
  }, [lang]);

  // Apply theme to document
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  // Translation helper
  const t = (key: keyof typeof i18n.en) => {
      return i18n[lang][key] || key;
  };

  const toggleLang = () => {
      setLang(prev => prev === 'zh' ? 'en' : 'zh');
  };

  const toggleTheme = () => {
      setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  // Update participant list size when count changes
  useEffect(() => {
    setParticipants(prev => {
      const currentSize = prev.length;
      if (currentSize === config.participantCount) return prev;
      
      if (currentSize < config.participantCount) {
        const added = Array.from({ length: config.participantCount - currentSize }, (_, i) => ({
          id: currentSize + i + 1,
          values: {}
        }));
        return [...prev, ...added];
      } else {
        return prev.slice(0, config.participantCount);
      }
    });
  }, [config.participantCount]);

  const handleDraw = () => {
    setIsDrawing(true);
    
    // Simulate drawing time with animation
    setTimeout(() => {
        // 1. Shuffle participants first (for random order within groups)
        const shuffled = shuffleArray([...participants]);
        
        let newGroups: Group[] = [];

        if (config.groupStrategy === 'field' && config.groupingFieldId) {
            // Group by field value
            const groupsMap = new Map<string, Participant[]>();
            
            shuffled.forEach(p => {
                // Get value, default to "Other" if empty
                const rawVal = p.values[config.groupingFieldId!] || '';
                const key = rawVal.trim() === '' ? (lang === 'zh' ? '未分类' : 'Uncategorized') : rawVal;
                
                if (!groupsMap.has(key)) {
                    groupsMap.set(key, []);
                }
                groupsMap.get(key)!.push(p);
            });

            let index = 0;
            groupsMap.forEach((members, key) => {
                index++;
                newGroups.push({
                    id: index,
                    name: key, // The group name is the field value
                    participants: members
                });
            });

            // Optional: Sort groups by name or size? Let's just keep insertion order or sort by name
            newGroups.sort((a, b) => a.name.localeCompare(b.name, lang === 'zh' ? 'zh' : 'en'));

        } else {
            // Standard random distribution by count
            newGroups = Array.from({ length: config.groupCount }, (_, i) => {
                const letter = String.fromCharCode(65 + i); // A, B, C...
                const groupName = t('groupNameTemplate').replace('{n}', letter);
                return {
                    id: i + 1,
                    name: groupName,
                    participants: []
                };
            });

            shuffled.forEach((p, index) => {
                const groupIndex = index % config.groupCount;
                newGroups[groupIndex].participants.push(p);
            });
        }

        setGroups(newGroups);
        setDrawTime(new Date());
        
        // Save to History
        addToHistory(config, newGroups, participants);
        
        setStep('results');
        setIsDrawing(false);
    }, 2500); // 2.5 seconds delay for animation
  };

  const handleReset = () => {
    setStep('setup');
    setGroups([]);
    setDrawTime(null);
  };

  const handleExportJSON = () => {
    const data: ExportData = {
        version: "1.0",
        timestamp: Date.now(),
        config: config,
        participants: participants,
        groups: step === 'results' ? groups : undefined,
        drawTime: drawTime ? drawTime.toISOString() : undefined
    };

    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    const safeName = config.name.replace(/[^a-z0-9]/gi, '_').toLowerCase() || 'tournament';
    a.download = `${safeName}_${new Date().toISOString().slice(0, 10)}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleImportJSON = (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = (event) => {
          try {
              const text = event.target?.result as string;
              const data = JSON.parse(text) as ExportData;

              // Basic validation
              if (!data.config || !Array.isArray(data.participants)) {
                  alert(t('importError'));
                  return;
              }

              setConfig(data.config);
              setParticipants(data.participants);

              // Restore groups if available, otherwise just participants
              if (data.groups && Array.isArray(data.groups) && data.groups.length > 0) {
                  setGroups(data.groups);
                  if (data.drawTime) setDrawTime(new Date(data.drawTime));
                  setStep('results');
              } else {
                  setStep('participants');
              }
              
              alert(t('importSuccess'));
          } catch (err) {
              console.error(err);
              alert(t('importError'));
          } finally {
              // Clear input to allow re-importing same file if needed
              if (e.target) e.target.value = '';
          }
      };
      reader.readAsText(file);
  };

  const getStepText = () => {
      const currentStepNum = step === 'setup' ? 1 : step === 'participants' ? 2 : 3;
      const currentStepName = step === 'setup' ? t('step1') : step === 'participants' ? t('step2') : t('step3');
      return t('stepCounter').replace('{current}', currentStepNum.toString()).replace('{name}', currentStepName);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col font-sans transition-colors duration-200">
        <HistoryModal 
            isOpen={showHistory} 
            onClose={() => setShowHistory(false)}
            history={history}
            onRestore={restoreHistoryItem}
            onDelete={deleteHistoryItem}
            t={t}
        />

        {/* Navigation Bar */}
        <nav className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-10 no-print transition-colors">
            <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="bg-blue-600 p-1.5 rounded-lg">
                        <TrophyIcon className="text-white w-5 h-5" />
                    </div>
                    <span className="font-bold text-xl text-gray-900 dark:text-white tracking-tight">{t('appTitle')}</span>
                </div>
                
                <div className="flex items-center gap-4">
                    <div className="text-sm text-gray-500 dark:text-gray-400 font-medium hidden sm:block">
                        {getStepText()}
                    </div>
                    
                    <div className="flex items-center bg-gray-100 dark:bg-gray-700 rounded-lg p-1">
                        <button
                            onClick={() => setShowHistory(true)}
                            className="px-2 py-1 rounded-md hover:bg-white dark:hover:bg-gray-600 text-gray-600 dark:text-gray-300 transition-all shadow-sm hover:shadow flex items-center gap-1"
                            title={t('historyBtn')}
                        >
                            <HistoryIcon className="w-4 h-4" />
                            <span className="text-xs font-bold hidden md:inline">{t('historyBtn')}</span>
                        </button>
                        <div className="w-px h-4 bg-gray-300 dark:bg-gray-600 mx-1"></div>
                        <button 
                            onClick={toggleTheme}
                            className="p-1.5 rounded-md hover:bg-white dark:hover:bg-gray-600 text-gray-600 dark:text-gray-300 transition-all shadow-sm hover:shadow"
                            title={theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
                        >
                            {theme === 'light' ? <MoonIcon className="w-4 h-4" /> : <SunIcon className="w-4 h-4" />}
                        </button>
                        <div className="w-px h-4 bg-gray-300 dark:bg-gray-600 mx-1"></div>
                        <button 
                            onClick={toggleLang}
                            className="px-2 py-1 rounded-md hover:bg-white dark:hover:bg-gray-600 text-gray-600 dark:text-gray-300 text-xs font-bold transition-all shadow-sm hover:shadow"
                        >
                            {lang === 'zh' ? 'EN' : '中'}
                        </button>
                    </div>
                </div>
            </div>
        </nav>

        {/* Main Content */}
        <main className="flex-grow p-4 md:p-8 relative">
             {isDrawing && (
                <DrawingAnimation 
                    participants={participants} 
                    primaryFieldId={config.primaryFieldId} 
                    t={t}
                />
            )}
            
            {step === 'setup' && (
                <SetupStep 
                    config={config} 
                    onConfigChange={setConfig} 
                    onNext={() => setStep('participants')} 
                    onImport={handleImportJSON}
                    t={t}
                />
            )}
            
            {step === 'participants' && (
                <ParticipantsStep 
                    config={config} 
                    participants={participants} 
                    onParticipantsChange={setParticipants}
                    onNext={handleDraw}
                    onBack={() => setStep('setup')}
                    onExportJSON={handleExportJSON}
                    t={t}
                />
            )}

            {step === 'results' && (
                <ResultsStep 
                    config={config} 
                    groups={groups}
                    drawTime={drawTime}
                    onReset={handleReset}
                    onRedraw={handleDraw}
                    onExportJSON={handleExportJSON}
                    t={t}
                />
            )}
        </main>
        
        {/* Footer */}
        <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 py-6 mt-auto no-print transition-colors">
             <div className="max-w-screen-2xl mx-auto px-4 text-center text-gray-400 dark:text-gray-500 text-sm">
                {t('footer')}
             </div>
        </footer>
    </div>
  );
};

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<App />);