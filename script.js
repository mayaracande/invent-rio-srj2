const API_URL = "COLE_AQUI_A_URL_DO_APPS_SCRIPT";

async function carregarDados() {
  const resposta = await fetch(`${API_URL}?action=getData`);
  return resposta.json();
}

async function salvarDados(dados) {
  await fetch(API_URL, {
    method: "POST",
    body: JSON.stringify({
      action: "saveData",
      ...dados
    })
  });
}
const defaultTasks = [
        {
          id: "devolucao",
          title: "Abrir áreas da devolução",
          status: "todo",
          tags: ["Fraude", "Missort", "Returns", "Bulking", "Damage"]
        },
        {
          id: "buffered",
          title: "Buffered",
          status: "todo",
          tags: ["14:00", "Despertador"]
        },
        {
          id: "sem-identificacao",
          title: "Sem identificação",
          status: "todo",
          tags: ["13:00", "Dias alternados"]
        },
        {
          id: "problem-solver",
          title: "Problem Solver",
          status: "todo",
          tags: ["16:20", "Pendências"]
        },
        {
          id: "sorting",
          title: "Sorting",
          status: "todo",
          tags: ["17:00"]
        },
        {
          id: "despach",
          title: "Despach",
          status: "todo",
          tags: ["Sem lembrete"]
        },
        {
          id: "inventario",
          title: "Tratativa do inventário sistêmico",
          status: "todo",
          tags: ["19:00"]
        },
        {
          id: "janta",
          title: "Janta da galera",
          status: "todo",
          tags: ["18:00"]
        }
      ];

      const routine = [
        { time: "13:00", name: "Sem identificação", note: "Somente nos dias programados" },
        { time: "14:00", name: "Buffered", note: "Conferir fila e pendências" },
        { time: "16:20", name: "Problem Solver", note: "Validar itens pendentes" },
        { time: "17:00", name: "Sorting", note: "Checar andamento e desvios" },
        { time: "18:00", name: "Janta da galera", note: "Pausa combinada" },
        { time: "19:00", name: "Inventário sistêmico", note: "Iniciar tratativa" },
        { time: "--", name: "Despach", note: "Sem lembrete definido" }
      ];

      const toolGroups = {
        inventory: [
          {
            name: "Análise de câmeras",
            category: "Forms",
            description: "Análise de pacotes pendentes no inventário.",
            url: "https://docs.google.com/forms/d/1c6_Ls8_EbWP6At76VjKeOyDj6YUpUVcrwcwfzkfq6g/viewform?edit_requested=true"
          },
          {
            name: "Tratativa sistêmica inventário",
            category: "Planilha",
            description: "Tratativa de pacotes pendentes do dia.",
            url: ""
          },
          {
            name: "Sem identificação",
            category: "Planilha",
            description: "Planilha para trazer pacotes do sistema.",
            url: ""
          },
          {
            name: "Overview inventário",
            category: "Dashboard",
            description: "Report de fechamento do inventário.",
            url: ""
          },
          {
            name: "Aderência",
            category: "Dashboard",
            description: "Aderência do dia anterior.",
            url: "https://datastudio.google.com/u/0/reporting/601a67e9-894e-48c0-acf9-272f0ffa60d/page/SljF?pli=1"
          },
          {
            name: "SCRIPTS",
            category: "Query",
            description: "Códigos para procura na query.",
            url: ""
          }
        ],
        operation: [
          {
            name: "CIA e COA",
            category: "Sistema",
            description: "Ferramenta operacional para acompanhamento de CIA e COA.",
            url: ""
          },
          {
            name: "Verificação de usuários",
            category: "Operação",
            description: "Controle para validar usuários da operação.",
            url: ""
          },
          {
            name: "QRS",
            category: "Operação",
            description: "Atalho operacional para consulta de QRS.",
            url: ""
          },
          {
            name: "Overview sorting e bancadas",
            category: "Planilha",
            description: "Visão de sorting e bancadas.",
            url: ""
          },
          {
            name: "Auditorias",
            category: "Sistema",
            description: "Sistema de apoio para auditorias.",
            url: ""
          },
          {
            name: "Notebook LM",
            category: "Consulta",
            description: "Consulta de apoio para análise e organização das informações.",
            url: ""
          },
          {
            name: "Bingo",
            category: "Sistema",
            description: "Sistema operacional de apoio.",
            url: ""
          },
          {
            name: "FAG",
            category: "Operação",
            description: "Acompanhamento do indicador FAG.",
            url: ""
          },
          {
            name: "CCO",
            category: "Dashboard",
            description: "Pacotes BBP.",
            url: "https://datastudio.google.com/u/0/reporting/f6b62851-82c0-4d6c-b943-028396e714b3/page/p_d73bsbyoud"
          },
          {
            name: "Insucesso",
            category: "Sistema",
            description: "Controle de insucesso.",
            url: ""
          },
          {
            name: "SALVADOS",
            category: "Sistema",
            description: "Controle de salvados.",
            url: "https://qnd.adminml.com/d/01KRFH1NB7Y5CQMV2PN27FRRRW/raw"
          }
        ]
      };

      const weeklyReturns = {
        days: [
          { key: "dom-04", label: "dom", date: "04/10" },
          { key: "seg-05", label: "seg", date: "05/10" },
          { key: "ter-06", label: "ter", date: "06/10" },
          { key: "qua-07", label: "qua", date: "07/10" },
          { key: "qui-08", label: "qui", date: "08/10" },
          { key: "sex-09", label: "sex", date: "09/10" },
          { key: "sab-10", label: "sáb", date: "10/10" }
        ],
        rows: [
          {
            id: "brsp10-0935",
            route: "SRJ2 para BRSP10",
            time: "09:35",
            days: ["dom-04"]
          },
          {
            id: "brrj02-0735",
            route: "SRJ2 para BRRJ02",
            time: "07:35",
            days: ["seg-05", "ter-06", "qua-07", "qui-08", "sab-10"]
          },
          {
            id: "brrj02-1830",
            route: "SRJ2 para BRRJ02",
            time: "18:30",
            days: ["ter-06", "sex-09", "sab-10"]
          },
          {
            id: "brsp11-0935",
            route: "SRJ2 para BRSP11",
            time: "09:35",
            days: ["qui-08", "sex-09"]
          },
          {
            id: "brxsp10-0600",
            route: "SRJ2 para BRXSP10",
            time: "06:00",
            days: ["sex-09"]
          }
        ]
      };

      const cameraDefault = `Para: ana.inacio@kuehne-nagel.com,
Caroline Nunes Do Nascimento <caroline.cnnascimento@mercadolivre.com>,
moacyr.santos@kuehne-nagel.com

CCO:
Monique Avelino Da Costa <monique.acosta@mercadolivre.com>,
Breno Nascimento De Oliveira <ext_nabreno@mercadolivre.com>,
Robson Barbosa Mendonca <ext_merobson@mercadolivre.com>,
carlos.guerra@kuehne-nagel.com,
Daiane Rodrigues Decanio <daiane.decanio@mercadolivre.com>,
Vinicius Leonardo Da Silva <vinicius.leonardo@mercadolivre.com>,
brenda.paulo@kuehne-nagel.com,
gabriel.lopes@kuehne-nagel.com
ext_sapjonat@mercadolivre.com`;

      const statuses = {
        todo: "A fazer",
        doing: "Em andamento",
        done: "Concluído"
      };

      const board = document.getElementById("kanbanBoard");
      const taskForm = document.getElementById("taskForm");
      const taskInput = document.getElementById("taskInput");
      const resetBoard = document.getElementById("resetBoard");
      const dates = document.getElementById("dates");
      const semIdentificationSaved = document.getElementById("semIdentificationSaved");
      const timeline = document.getElementById("timeline");
      const inventoryLinks = document.getElementById("inventoryLinks");
      const operationLinks = document.getElementById("operationLinks");
      const inventoryToolsBox = document.getElementById("inventoryToolsBox");
      const operationToolsBox = document.getElementById("operationToolsBox");
      const inventoryToolsSaved = document.getElementById("inventoryToolsSaved");
      const operationToolsSaved = document.getElementById("operationToolsSaved");
      const productivityChart = document.getElementById("productivityChart");
      const productivityPercent = document.getElementById("productivityPercent");
      const productivityFill = document.getElementById("productivityFill");
      const weeklyReturnsTable = document.getElementById("weeklyReturnsTable");
      const weeklyReturnsSaved = document.getElementById("weeklyReturnsSaved");
      const cameraText = document.getElementById("cameraText");
      const copyCamera = document.getElementById("copyCamera");
      const restoreCamera = document.getElementById("restoreCamera");
      const cameraToast = document.getElementById("cameraToast");

      const storage = {
        tasks: "work-productivity-tasks",
        inventoryTools: "work-productivity-inventory-tools",
        operationTools: "work-productivity-operation-tools",
        semIdentification: "work-productivity-sem-identification",
        weeklyReturns: "work-productivity-weekly-returns",
        camera: "work-productivity-camera"
      };

      function loadTasks() {
        try {
          return JSON.parse(localStorage.getItem(storage.tasks)) || defaultTasks;
        } catch {
          return defaultTasks;
        }
      }

      function saveTasks(tasks) {
        localStorage.setItem(storage.tasks, JSON.stringify(tasks));
      }

      function renderBoard() {
        const tasks = loadTasks();
        board.innerHTML = "";

        Object.entries(statuses).forEach(([status, label]) => {
          const items = tasks.filter((task) => task.status === status);
          const column = document.createElement("section");
          column.className = "column";
          column.innerHTML = `
            <div class="column-title">
              <span>${label}</span>
              <span class="count">${items.length}</span>
            </div>
          `;

          items.forEach((task) => {
            const card = document.createElement("article");
            card.className = `task ${task.status === "done" ? "done" : ""}`;
            card.innerHTML = `
              <h3>${escapeHtml(task.title)}</h3>
              <div class="meta">${task.tags.map((tag) => `<span class="tag">${escapeHtml(tag)}</span>`).join("")}</div>
              <select aria-label="Status de ${escapeHtml(task.title)}">
                ${Object.entries(statuses)
                  .map(
                    ([value, optionLabel]) =>
                      `<option value="${value}" ${value === task.status ? "selected" : ""}>${optionLabel}</option>`
                  )
                  .join("")}
              </select>
            `;
            card.querySelector("select").addEventListener("change", (event) => {
              const updated = loadTasks().map((item) =>
                item.id === task.id ? { ...item, status: event.target.value } : item
              );
              saveTasks(updated);
              renderBoard();
            });
            column.appendChild(card);
          });

          board.appendChild(column);
        });

        renderProductivity(tasks);
      }

      function renderProductivity(tasks) {
        const total = tasks.length || 1;
        const rows = [
          { key: "todo", label: "A fazer", color: "#6e92f2" },
          { key: "doing", label: "Em andamento", color: "#2e5de6" },
          { key: "done", label: "Concluído", color: "#071039" }
        ].map((item) => ({
          ...item,
          count: tasks.filter((task) => task.status === item.key).length
        }));
        const done = rows.find((row) => row.key === "done").count;
        const percent = Math.round((done / total) * 100);

        productivityPercent.textContent = `${percent}%`;
        productivityFill.style.width = `${percent}%`;
        productivityChart.innerHTML = rows
          .map((row) => {
            const width = Math.round((row.count / total) * 100);
            return `
              <div class="chart-row">
                <span>${row.label}</span>
                <span class="bar-track">
                  <span class="bar-fill" style="width: ${width}%; background: ${row.color}"></span>
                </span>
                <span>${row.count}</span>
              </div>
            `;
          })
          .join("");
      }

      function renderToolLinks(target, tools) {
        target.innerHTML = tools
          .map((tool) => {
            const action = tool.url
              ? `<a class="tool-action" href="${escapeHtml(tool.url)}" target="_blank" rel="noreferrer">Abrir</a>`
              : `<span class="tool-action missing">Sem link</span>`;
            return `
              <article class="tool-card">
                <div>
                  <h3>${escapeHtml(tool.name)}</h3>
                  <p><strong>${escapeHtml(tool.category)}</strong> · ${escapeHtml(tool.description)}</p>
                </div>
                ${action}
              </article>
            `;
          })
          .join("");
      }

      function setupSavedTextarea(textarea, toast, key, label) {
        textarea.value = localStorage.getItem(key) || "";
        textarea.addEventListener("input", () => {
          localStorage.setItem(key, textarea.value);
          toast.textContent = `${label} salvas neste navegador.`;
          window.clearTimeout(textarea.saveToast);
          textarea.saveToast = window.setTimeout(() => (toast.textContent = ""), 1600);
        });
      }

      function loadWeeklyReturns() {
        try {
          return JSON.parse(localStorage.getItem(storage.weeklyReturns)) || {};
        } catch {
          return {};
        }
      }

      function saveWeeklyReturns(values) {
        localStorage.setItem(storage.weeklyReturns, JSON.stringify(values));
      }

      function renderWeeklyReturns() {
        const saved = loadWeeklyReturns();
        const header = `
          <thead>
            <tr>
              <th>devolução</th>
              ${weeklyReturns.days
                .map((day) => `<th>${escapeHtml(day.label)}<br />${escapeHtml(day.date)}</th>`)
                .join("")}
            </tr>
          </thead>
        `;
        const body = weeklyReturns.rows
          .map((row) => {
            const cells = weeklyReturns.days
              .map((day) => {
                const key = `${row.id}-${day.key}`;
                if (!row.days.includes(day.key)) {
                  return `<td class="check-cell"><span class="empty-check">-</span></td>`;
                }
                return `
                  <td class="check-cell">
                    <input
                      class="return-check"
                      type="checkbox"
                      data-return-key="${key}"
                      ${saved[key] ? "checked" : ""}
                      aria-label="Marcar ${escapeHtml(row.route)} em ${escapeHtml(day.date)}"
                    />
                  </td>
                `;
              })
              .join("");
            return `
              <tr>
                <td>
                  <span class="return-name">${escapeHtml(row.route)}</span>
                  <span class="return-meta">CPT Origem ${escapeHtml(row.time)}</span>
                </td>
                ${cells}
              </tr>
            `;
          })
          .join("");

        weeklyReturnsTable.innerHTML = `${header}<tbody>${body}</tbody>`;
        weeklyReturnsTable.querySelectorAll(".return-check").forEach((checkbox) => {
          checkbox.addEventListener("change", (event) => {
            const values = loadWeeklyReturns();
            values[event.target.dataset.returnKey] = event.target.checked;
            saveWeeklyReturns(values);
            weeklyReturnsSaved.textContent = "Devolução da semana atualizada.";
            window.clearTimeout(window.weeklyReturnToast);
            window.weeklyReturnToast = window.setTimeout(
              () => (weeklyReturnsSaved.textContent = ""),
              1600
            );
          });
        });
      }

      function renderTimeline() {
        const now = new Date();
        const currentMinutes = now.getHours() * 60 + now.getMinutes();
        const next = routine.find((item) => {
          if (!item.time.includes(":")) return false;
          const [hour, minute] = item.time.split(":").map(Number);
          return hour * 60 + minute >= currentMinutes;
        });

        document.getElementById("todayLabel").textContent = new Intl.DateTimeFormat(
          "pt-BR",
          { weekday: "long", day: "2-digit", month: "long" }
        ).format(now);
        document.getElementById("nextFocus").textContent = next
          ? `Próximo foco: ${next.name} às ${next.time}.`
          : "Rotina principal concluída por hoje.";

        timeline.innerHTML = routine
          .map((item) => {
            const isNow = next && next.name === item.name;
            return `
              <div class="time-row">
                <strong class="time">${item.time}</strong>
                <div>
                  <strong>${item.name}</strong>
                  <p>${item.note}</p>
                </div>
                <span class="status-pill ${isNow ? "now" : ""}">${isNow ? "Próximo" : "Rotina"}</span>
              </div>
            `;
          })
          .join("");
      }

      function renderDates() {
        const activeDays = [3, 5, 9, 11, 13, 15, 17, 19, 21, 23, 27, 31];
        const today = new Date().getDate();
        const completed = loadSemIdentification();
        dates.innerHTML = activeDays
          .map(
            (day) => {
              const dayKey = String(day).padStart(2, "0");
              const checked = Boolean(completed[dayKey]);
              return `
                <label class="date-badge ${day === today ? "active" : ""} ${checked ? "done" : ""}">
                  <input
                    type="checkbox"
                    data-day="${dayKey}"
                    ${checked ? "checked" : ""}
                    aria-label="Marcar sem identificação do dia ${dayKey} como concluído"
                  />
                  <span>${dayKey}</span>
                  <span class="ok-label">${checked ? "OK" : ""}</span>
                </label>
              `;
            }
          )
          .join("");

        dates.querySelectorAll("input[type='checkbox']").forEach((checkbox) => {
          checkbox.addEventListener("change", (event) => {
            const values = loadSemIdentification();
            values[event.target.dataset.day] = event.target.checked;
            saveSemIdentification(values);
            renderDates();
            semIdentificationSaved.textContent = event.target.checked
              ? `Dia ${event.target.dataset.day} marcado como OK.`
              : `Dia ${event.target.dataset.day} desmarcado.`;
            window.clearTimeout(window.semIdentificationToast);
            window.semIdentificationToast = window.setTimeout(
              () => (semIdentificationSaved.textContent = ""),
              1600
            );
          });
        });
      }

      function loadSemIdentification() {
        try {
          return JSON.parse(localStorage.getItem(storage.semIdentification)) || {};
        } catch {
          return {};
        }
      }

      function saveSemIdentification(values) {
        localStorage.setItem(storage.semIdentification, JSON.stringify(values));
      }

      function escapeHtml(value) {
        return String(value)
          .replaceAll("&", "&amp;")
          .replaceAll("<", "&lt;")
          .replaceAll(">", "&gt;")
          .replaceAll('"', "&quot;")
          .replaceAll("'", "&#039;");
      }

      taskForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const title = taskInput.value.trim();
        if (!title) return;
        const tasks = loadTasks();
        tasks.push({
          id: `custom-${Date.now()}`,
          title,
          status: "todo",
          tags: ["Avulso"]
        });
        saveTasks(tasks);
        taskInput.value = "";
        renderBoard();
      });

      resetBoard.addEventListener("click", () => {
        saveTasks(defaultTasks);
        renderBoard();
      });

      cameraText.value = localStorage.getItem(storage.camera) || cameraDefault;
      cameraText.addEventListener("input", () => {
        localStorage.setItem(storage.camera, cameraText.value);
      });

      copyCamera.addEventListener("click", async () => {
        await navigator.clipboard.writeText(cameraText.value);
        cameraToast.textContent = "Texto copiado.";
        window.setTimeout(() => (cameraToast.textContent = ""), 1600);
      });

      restoreCamera.addEventListener("click", () => {
        cameraText.value = cameraDefault;
        localStorage.setItem(storage.camera, cameraDefault);
        cameraToast.textContent = "Texto restaurado.";
        window.setTimeout(() => (cameraToast.textContent = ""), 1600);
      });

      renderBoard();
      renderTimeline();
      renderDates();
      renderWeeklyReturns();
      renderToolLinks(inventoryLinks, toolGroups.inventory);
      renderToolLinks(operationLinks, toolGroups.operation);
      setupSavedTextarea(
        inventoryToolsBox,
        inventoryToolsSaved,
        storage.inventoryTools,
        "Observações do inventário"
      );
      setupSavedTextarea(
        operationToolsBox,
        operationToolsSaved,
        storage.operationTools,
        "Observações da operação"
      );
      window.setInterval(renderTimeline, 60000);
