Mapa de líneas · RUSH POS v31.1
Referencia para pedir cambios por número de línea. Los números cambian con cada edición; este mapa es para ESTA versión (v31.1).
server.js (1696 líneas)
Tablas
L148 — ``CREATE TABLE IF NOT EXISTS tenants (`
L155 — `await db.prepare(`CREATE TABLE IF NOT EXISTS tenant_settings (tenant_id TEXT, `
L216 — `await db.prepare(`CREATE TABLE IF NOT EXISTS pos_settings (key TEXT PRIMARY KE`
L218 — ``CREATE TABLE IF NOT EXISTS pos_loyalty (`
L228 — ``CREATE TABLE IF NOT EXISTS pos_loyalty_events (`
L233 — ``CREATE TABLE IF NOT EXISTS pos_voids (`
L242 — ``CREATE TABLE IF NOT EXISTS pos_shifts (`
L267 — ``CREATE TABLE IF NOT EXISTS pos_sessions (`
L277 — ``CREATE TABLE IF NOT EXISTS pos_menu_sections (`
L281 — ``CREATE TABLE IF NOT EXISTS pos_menu_categories (`
L295 — `await db.prepare(`CREATE TABLE IF NOT EXISTS pos_driver_locations (driver_id T`
L297 — ``CREATE TABLE IF NOT EXISTS pos_cash_movements (`
L302 — ``CREATE TABLE IF NOT EXISTS pos_cuts (`
L307 — ``CREATE TABLE IF NOT EXISTS pos_inventory (`
L312 — ``CREATE TABLE IF NOT EXISTS pos_inventory_moves (`
Endpoints
L367 — `if (path === "/api/shipping-quote" && request.method === "POST") {`
L378 — `if (path === "/api/track" && request.method === "GET") {`
L417 — `if (path === "/api/public-settings" && request.method === "GET") {`
L428 — `if (path === "/api/public-menu" && request.method === "GET") {`
L434 — `if (path === "/api/public-order" && request.method === "POST") {`
L500 — `if (path === "/api/loyalty-join" && request.method === "POST") {`
L514 — `if (path === "/api/loyalty-card" && request.method === "GET") {`
L527 — `if (path === "/api/signup" && request.method === "POST") {`
L561 — `if (path === "/api/tenant-status" && request.method === "GET") {`
L588 — `if (path === "/api/login" && request.method === "POST") {`
L642 — `if (path === "/api/onboarding" && request.method === "POST") {`
L654 — `if (path === "/api/platform/tenants" && request.method === "GET") {`
L672 — `if (path === "/api/logout" && request.method === "POST") {`
L775 — `if (path === "/api/loyalty-token" && request.method === "POST") {`
L788 — `if (path === "/api/loyalty-redeem" && request.method === "POST") {`
L799 — `if (path === "/api/team-wa" && request.method === "GET") {`
L809 — `if (path === "/api/on-duty" && request.method === "GET") {`
L814 — `if (path === "/api/on-duty" && request.method === "POST") {`
L827 — `if (path === "/api/settings" && request.method === "GET") {`
L832 — `if (path === "/api/settings" && request.method === "PATCH") {`
L844 — `if (path === "/api/drivers" && request.method === "GET") {`
L867 — `if (path === "/api/my-deliveries" && request.method === "GET") {`
L874 — `if (path === "/api/my-location" && request.method === "POST") {`
L886 — `if (path === "/api/loyalty-dashboard" && request.method === "GET") {`
L917 — `if (path === "/api/customers" && request.method === "GET") {`
L994 — `if (path === "/api/photo-upload" && request.method === "POST") {`
L1005 — `if (path === "/api/photos/status" && request.method === "GET") {`
L1016 — `if (path === "/api/photos/migrate" && request.method === "POST") {`
L1049 — `if (path === "/api/menu" && request.method === "GET") {`
L1058 — `if (path === "/api/menu-structure" && request.method === "GET") {`
L1065 — `if (path === "/api/menu-popular" && request.method === "GET") {`
L1075 — `if (path === "/api/menu" && request.method === "POST") {`
L1105 — `if (path === "/api/menu-classify" && request.method === "POST") {`
L1151 — `if (path === "/api/menu-sections" && request.method === "POST") {`
L1206 — `if (path === "/api/menu-categories" && request.method === "POST") {`
L1258 — `if (path === "/api/tables" && request.method === "GET") {`
L1373 — `if (path === "/api/external-order" && request.method === "POST") {`
L1448 — `if (path === "/api/shifts" && request.method === "GET") {`
L1459 — `if (path === "/api/shifts" && request.method === "POST") {`
L1470 — `if (path === "/api/shifts-status" && request.method === "GET") {`
L1492 — `if (path === "/api/payments/recent" && request.method === "GET") {`
L1507 — `if (path === "/api/void-payment" && request.method === "POST") {`
L1559 — `if (path === "/api/void-pin" && request.method === "POST") {`
L1571 — `if (path === "/api/dashboard" && request.method === "GET") {`
L1582 — `if (path === "/api/manual-transactions" && request.method === "POST") {`
L1606 — `if (path === "/api/cuts" && request.method === "GET") {`
L1611 — `if (path === "/api/cuts" && request.method === "POST") {`
L1630 — `if (path === "/api/inventory" && request.method === "GET") {`
L1634 — `if (path === "/api/inventory" && request.method === "POST") {`
L1651 — `if (path === "/api/inventory-moves" && request.method === "GET") {`
public/index.html (2015 líneas)
Secciones
L82 — `<section id="loginView" class="login">`
L94 — `<section id="appView" class="hidden">`
L113 — `<section id="venta" class="view">`
L149 — `<section id="canchas" class="view hidden">`
L168 — `<section id="mesas" class="view hidden">`
L173 — `<section id="cocina" class="view hidden">`
L178 — `<section id="barra" class="view hidden">`
L183 — `<section id="ordenes" class="view hidden">`
L188 — `<section id="caja" class="view hidden">`
L229 — `<section id="lealtad" class="view hidden">`
L266 — `<section id="inventario" class="view hidden">`
L291 — `<section id="productos" class="view hidden">`
L326 — `<section id="config" class="view hidden">`
L403 — `<section id="entregas" class="view hidden">`
L412 — `<section id="carta" class="view hidden">`
L421 — `<section id="turnos" class="view hidden">`
L428 — `<section id="plataforma" class="view hidden">`
L434 — `<section id="usuarios" class="view hidden">`
Funciones JS
L515 — `function toast(msg){`
L520 — `async function api(path,opts={}){`
L536 — `async function login(){`
L548 — `function logout(show=true){`
L555 — `function boot(){`
L565 — `function isAdmin(){ return me?.role==="admin"; }`
L569 — `async function checkTenantThenShow(){`
L584 — `function openOnboarding(){`
L588 — `async function saveOnboarding(){`
L595 — `function showApp(){`
L629 — `function view(id,btn){`
L641 — `async function loadAll(){`
L651 — `function cleanName(n){ return String(n||"").replace(/\s*\(\d{10}\)\s*$/,"").tr`
L652 — `function tableLabel(o){`
L657 — `function personNum(p){ const m=String(p||"").match(/\d+/); return m?Number(m[0`
L658 — `function orderPeople(o){ return Math.max(1,...(o.items||[]).map(it=>personNum(`
L659 — `function groupByPerson(items){`
L663 — `function stationNote(o,dest){ return (o.np && o.np[dest==='barra'?'barra':'coc`
L664 — `function orderTypeLabel(o){ return (o.np && o.np.type) ? `[${o.np.type}]` : ""`
L665 — `function stationBadges(o){`
L674 — `function maxPersonUI(){ return Math.max(1, offsetPeople, currentPerson, ...car`
L675 — `function renderPersonChips(){`
L681 — `function setPerson(i){ currentPerson=i; renderPersonChips(); }`
L682 — `function nextPerson(){`
L688 — `async function onTableChange(){`
L699 — `function unlinkOrder(){ linkedOrder=null; offsetPeople=0; if(!cart.length) cur`
L700 — `function renderLinkBanner(){`
L705 — `function normTxt(s){ return String(s||"").toLowerCase().normalize("NFD").repla`
L706 — `function allCats(){ return menuStructure.sections.flatMap(s=>s.categories.map(`
L707 — `function catById(id){ return id?allCats().find(c=>String(c.id)===String(id)):n`
L708 — `function secById(id){ return menuStructure.sections.find(s=>String(s.id)===Str`
L710 — `function placement(p){`
L718 — `function popularProducts(){ return popular.map(x=>products.find(p=>String(p.id`
L719 — `function renderSectionTabs(){`
L728 — `function selectSection(id){ currentSection=id; currentCategory="TODOS"; render`
L729 — `function renderCategoryChips(){`
L741 — `function filterCategory(i){ currentCategory=chipKeys[i]||"TODOS"; renderCatego`
L742 — `function renderProducts(){`
L751 — `function addToCart(id){`
L759 — `function editCartNote(i){`
L765 — `function renderCart(){`
L776 — `function renderTableSelect(){`
L782 — `async function sendOrder(){`
L807 — `async function loadCanchasData(){`
L815 — `function updateResTotal(){ const court = courtsList.find(c=>String(c.id)===$("`
L816 — `async function createReservation(){`
L825 — `async function deleteReservation(id){ if(confirm("¿Eliminar?")){ await api("/r`
L826 — `function sendReservationWhatsApp(id){ const r = activeReservations.find(x=>Str`
L828 — `function renderTables(){ $("tables").innerHTML = tables.filter(t=>t.type==='me`
L829 — `async function loadStation(dest){`
L842 — `function loadKitchen(){ return loadStation('cocina'); }`
L843 — `function loadBarra(){ return loadStation('barra'); }`
L844 — `async function markReady(id,dest){`
L851 — `function deliveryBar(o){`
L861 — `async function loadOrders(){`
L890 — `function openWaModal(oid){`
L897 — `function pickWaTemplate(key){ $('waText').value = WA_TEMPLATES[key](waOrder); `
L898 — `function sendWaMessage(){`
L903 — `async function loadDrivers(){ driversCache=await api("/drivers").catch(()=>[])`
L904 — `async function assignDriver(oid,driverId){ try{ await api(`/orders/${oid}/deli`
L905 — `async function setDeliveryStatus(oid,status){ try{ await api(`/orders/${oid}/d`
L906 — `async function redeemPrompt(phone){`
L911 — `async function deleteOrder(id){ if(!confirm("¿Borrar esta orden?")) return; tr`
L912 — `function openAddItemsModal(orderId){`
L922 — `async function confirmAddExtraItem(){`
L931 — `async function payAndClear(id){`
L944 — `async function markDelivered(id){`
L950 — `function ticketHead(o){`
L954 — `async function previewTicket(id){`
L975 — `async function sendLoyaltyCard(phone,name){`
L984 — `function sendTicketWhatsApp(){`
L995 — `function channelLabel(c){ return {rappi:"🛵 Rappi",uber:"🚗 Uber Eats",domicilio`
L996 — `async function registerManualTx(){`
L1003 — `function money(n){ return "$"+(Number(n)||0).toLocaleString('es-MX',{minimumFr`
L1004 — `async function loadDashboard(){`
L1020 — `async function deleteMovement(id){ if(!confirm("¿Borrar este movimiento?")) re`
L1021 — `function cutRow(c){`
L1033 — `async function makeCashCut(){`
L1044 — `async function loadInventoryData(){`
L1051 — `async function createInventoryItem(){`
L1058 — `async function updateStockDaily(){`
L1067 — `async function deactivateInvItem(id){ if(!confirm("¿Desactivar este insumo?"))`
L1070 — `async function loadSettings(){`
L1086 — `async function loadPayments(){`
L1098 — `function fmtLocal(t){ try{ return new Date(String(t).replace(' ','T')+'Z').toL`
L1099 — `function openVoid(i){`
L1107 — `function closeVoid(){ $("voidModal").classList.add("hidden"); ["voidAdminPw","`
L1108 — `async function confirmVoid(){`
L1121 — `async function changeVoidPin(){`
L1131 — `async function getTeam(){`
L1137 — `function closeWa(){ $("waModal").classList.add("hidden"); }`
L1138 — `function itemLines(items){ return items.map(x=>`• ${x.qty||1}x ${x.name}${x.no`
L1139 — `function showWa(title, sub, rows){`
L1152 — `async function waComanda(o){`
L1169 — `function waComandaFromOrder(id){`
L1176 — `async function waReady(o,dest){`
L1191 — `async function waEntregado(o){`
L1205 — `async function waTicket(o,r){`
L1217 — `function todayMx(){ const p=new Intl.DateTimeFormat('en-CA',{timeZone:'America`
L1218 — `async function checkShiftReminder(){`
L1231 — `function goTurnos(){ const b=[...document.querySelectorAll("#nav button")].fin`
L1232 — `async function loadShifts(){`
L1237 — `function renderShifts(){`
L1253 — `async function toggleShift(role,shift,uid){`
L1264 — `function matchProductForFile(fname, list){`
L1275 — `function bulkBoxEl(){ return currentView==="carta" ? $("bulkBoxCarta") : $("bu`
L1276 — `async function bulkPhotos(input){`
L1282 — `function renderBulk(){`
L1294 — `async function runBulk(){`
L1308 — `function testPhotos(){`
L1329 — `async function migratePhotos(){`
L1344 — `async function loadLoyaltyDash(){`
L1365 — `function copyJoinLink(){ $("joinLinkBox").select(); document.execCommand("copy`
L1367 — `async function loadDuty(){`
L1378 — `async function saveDuty(uid){`
L1382 — `async function refreshDutyPill(){`
L1389 — `async function loadPlatform(){`
L1393 — `function renderPlatform(list){`
L1408 — `async function setTenantStatus(id,status){`
L1412 — `async function extendTenant(id){`
L1417 — `function goConfig(){ const b=[...document.querySelectorAll("#nav button")].fin`
L1418 — `async function saveSettings(){`
L1435 — `function copyPublicLink(){ $("publicLinkBox").select(); document.execCommand("`
L1438 — `function openExternalOrderModal(){`
L1443 — `function addExtItem(){`
L1450 — `function renderExtCart(){`
L1455 — `async function submitExternalOrder(){`
L1485 — `function kwMatch(text,kw){`
L1489 — `function suggestCategoryName(p){`
L1498 — `function autoClassify(){`
L1509 — `function updateSaveBtn(){ $("saveClassBtn").textContent=`💾 Guardar (${Object.k`
L1510 — `function setPending(i,val){`
L1515 — `async function saveClassification(){`
L1524 — `function catOptions(selected){`
L1527 — `function renderProductAdmin(){`
L1533 — `function renderMenuStructure(){`
L1541 — `function renderClassifyTable(){`
L1554 — `function smartTitle(s){`
L1560 — `function suggestTitle(){`
L1564 — `function handleImageFile(input,previewId,dataFieldId){`
L1578 — `function fileToJpeg(file, MAX=1000){`
L1591 — `async function uploadPhotoData(dataUrl){`
L1597 — `function imgSrc(u){`
L1604 — `async function loadCarta(){`
L1608 — `function renderCarta(){`
L1626 — `async function cartaSave(i, body){`
L1636 — `async function cartaPhoto(i,input){`
L1641 — `function cartaPhotoUrl(i){`
L1771 — `function bestPhotoMatch(name){`
L1782 — `function suggestPhotosFromDrive(){`
L1790 — `function renderPhotoSuggestBox(){`
L1797 — `async function applyPendingPhotos(){`
L1806 — `async function createProduct(){`
L1818 — `async function setProductDest(i,dest){`
L1823 — `async function uploadProductImage(i,input){`
L1832 — `async function toggleSoldOut(i){`
L1837 — `async function deactivateProduct(i){`
L1843 — `async function menuAction(method,path,body,okMsg){`
L1847 — `function addSection(){`
L1853 — `function renameSection(id){ const s=secById(id); const n=prompt("Nuevo nombre `
L1854 — `function setSectionDest(id,dest){ return menuAction("PATCH","/menu-sections/"+`
L1855 — `function deleteSection(id){ if(confirm("¿Eliminar esta sección? (debe estar si`
L1856 — `function addCategory(sid){ const n=prompt("Nombre de la nueva categoría:"); if`
L1857 — `function renameCategory(id){ const c=catById(id); const n=prompt("Nuevo nombre`
L1858 — `function moveCategory(id,dir){ menuAction("PATCH","/menu-categories/"+encodeUR`
L1859 — `function deleteCategory(id){ if(confirm("¿Eliminar la categoría? Sus productos`
L1862 — `async function loadUsers(){`
L1868 — `async function createUser(){`
L1877 — `async function toggleWaNotify(i){`
L1882 — `async function changeWhatsapp(i){`
L1891 — `async function changePassword(i){`
L1899 — `async function deleteUser(i){`
L1907 — `async function loadLoyaltyCustomers(){`
L1911 — `function filteredCustomers(){`
L1915 — `function renderLoyalty(){`
L1920 — `function toggleCustomer(idx){ const p=customers[idx].phone; if(selectedPhones.`
L1921 — `function toggleAllCustomers(){`
L1927 — `function firstName(n){ return String(n||"").split(" ")[0]||""; }`
L1928 — `function campaignText(c){`
L1932 — `function messageCustomer(idx){ const c=customers[idx]; window.open(`https://wa`
L1933 — `function startCampaign(){`
L1939 — `function sendNextCampaign(){`
L1948 — `function renderCampaignBar(){`
L1957 — `function toggleShareLocation(){`
L1971 — `async function loadMyDeliveries(){`
L1986 — `async function myDeliveryNext(oid,status){ try{ await api(`/orders/${oid}/deli`
