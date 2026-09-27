Mapa de líneas · RUSH POS v34.0
Referencia para pedir cambios por número de línea. Los números cambian con cada edición; este mapa es para ESTA versión (v34.0). server.js también trae su propio índice al inicio del archivo.
server.js (1788 líneas)
Tablas
L173 — ``CREATE TABLE IF NOT EXISTS tenants (`
L180 — `await db.prepare(`CREATE TABLE IF NOT EXISTS tenant_settings (tenant_id TEXT, `
L242 — `await db.prepare(`CREATE TABLE IF NOT EXISTS pos_settings (key TEXT PRIMARY KE`
L244 — ``CREATE TABLE IF NOT EXISTS pos_loyalty (`
L254 — ``CREATE TABLE IF NOT EXISTS pos_loyalty_events (`
L259 — ``CREATE TABLE IF NOT EXISTS pos_voids (`
L268 — ``CREATE TABLE IF NOT EXISTS pos_shifts (`
L296 — ``CREATE TABLE IF NOT EXISTS pos_sessions (`
L306 — ``CREATE TABLE IF NOT EXISTS pos_menu_sections (`
L310 — ``CREATE TABLE IF NOT EXISTS pos_menu_categories (`
L324 — `await db.prepare(`CREATE TABLE IF NOT EXISTS pos_driver_locations (driver_id T`
L326 — ``CREATE TABLE IF NOT EXISTS pos_cash_movements (`
L331 — ``CREATE TABLE IF NOT EXISTS pos_cuts (`
L336 — ``CREATE TABLE IF NOT EXISTS pos_inventory (`
L341 — ``CREATE TABLE IF NOT EXISTS pos_inventory_moves (`
L1304 — ``CREATE TABLE IF NOT EXISTS pos_courts (`
L1308 — ``CREATE TABLE IF NOT EXISTS pos_reservations (`
Endpoints
L396 — `if (path === "/api/shipping-quote" && request.method === "POST") {`
L407 — `if (path === "/api/track" && request.method === "GET") {`
L446 — `if (path === "/api/public-settings" && request.method === "GET") {`
L461 — `if (path === "/api/public-menu" && request.method === "GET") {`
L467 — `if (path === "/api/public-order" && request.method === "POST") {`
L533 — `if (path === "/api/loyalty-join" && request.method === "POST") {`
L547 — `if (path === "/api/loyalty-card" && request.method === "GET") {`
L560 — `if (path === "/api/signup" && request.method === "POST") {`
L594 — `if (path === "/api/tenant-status" && request.method === "GET") {`
L621 — `if (path === "/api/login" && request.method === "POST") {`
L675 — `if (path === "/api/onboarding" && request.method === "POST") {`
L687 — `if (path === "/api/platform/tenants" && request.method === "GET") {`
L705 — `if (path === "/api/logout" && request.method === "POST") {`
L808 — `if (path === "/api/loyalty-token" && request.method === "POST") {`
L821 — `if (path === "/api/loyalty-redeem" && request.method === "POST") {`
L832 — `if (path === "/api/team-wa" && request.method === "GET") {`
L842 — `if (path === "/api/on-duty" && request.method === "GET") {`
L847 — `if (path === "/api/on-duty" && request.method === "POST") {`
L860 — `if (path === "/api/settings" && request.method === "GET") {`
L865 — `if (path === "/api/settings" && request.method === "PATCH") {`
L877 — `if (path === "/api/drivers" && request.method === "GET") {`
L900 — `if (path === "/api/my-deliveries" && request.method === "GET") {`
L907 — `if (path === "/api/my-location" && request.method === "POST") {`
L919 — `if (path === "/api/loyalty-dashboard" && request.method === "GET") {`
L950 — `if (path === "/api/customers" && request.method === "GET") {`
L1027 — `if (path === "/api/photo-upload" && request.method === "POST") {`
L1038 — `if (path === "/api/photos/status" && request.method === "GET") {`
L1049 — `if (path === "/api/photos/migrate" && request.method === "POST") {`
L1082 — `if (path === "/api/menu" && request.method === "GET") {`
L1091 — `if (path === "/api/menu-structure" && request.method === "GET") {`
L1098 — `if (path === "/api/menu-popular" && request.method === "GET") {`
L1108 — `if (path === "/api/menu" && request.method === "POST") {`
L1138 — `if (path === "/api/menu-classify" && request.method === "POST") {`
L1184 — `if (path === "/api/menu-sections" && request.method === "POST") {`
L1239 — `if (path === "/api/menu-categories" && request.method === "POST") {`
L1291 — `if (path === "/api/tables" && request.method === "GET") {`
L1314 — `if (path === "/api/courts" && request.method === "GET") {`
L1318 — `if (path === "/api/courts" && request.method === "POST") {`
L1334 — `if (path === "/api/reservations" && request.method === "GET") {`
L1341 — `if (path === "/api/reservations" && request.method === "POST") {`
L1465 — `if (path === "/api/external-order" && request.method === "POST") {`
L1540 — `if (path === "/api/shifts" && request.method === "GET") {`
L1551 — `if (path === "/api/shifts" && request.method === "POST") {`
L1562 — `if (path === "/api/shifts-status" && request.method === "GET") {`
L1584 — `if (path === "/api/payments/recent" && request.method === "GET") {`
L1599 — `if (path === "/api/void-payment" && request.method === "POST") {`
L1651 — `if (path === "/api/void-pin" && request.method === "POST") {`
L1663 — `if (path === "/api/dashboard" && request.method === "GET") {`
L1674 — `if (path === "/api/manual-transactions" && request.method === "POST") {`
L1698 — `if (path === "/api/cuts" && request.method === "GET") {`
L1703 — `if (path === "/api/cuts" && request.method === "POST") {`
L1722 — `if (path === "/api/inventory" && request.method === "GET") {`
L1726 — `if (path === "/api/inventory" && request.method === "POST") {`
L1743 — `if (path === "/api/inventory-moves" && request.method === "GET") {`
public/index.html (2134 líneas)
Secciones
L120 — `<section id="loginView" class="login">`
L132 — `<section id="appView" class="hidden">`
L151 — `<section id="venta" class="view">`
L187 — `<section id="canchas" class="view hidden">`
L208 — `<section id="mesas" class="view hidden">`
L213 — `<section id="cocina" class="view hidden">`
L218 — `<section id="barra" class="view hidden">`
L223 — `<section id="ordenes" class="view hidden">`
L228 — `<section id="caja" class="view hidden">`
L269 — `<section id="lealtad" class="view hidden">`
L306 — `<section id="inventario" class="view hidden">`
L331 — `<section id="productos" class="view hidden">`
L366 — `<section id="config" class="view hidden">`
L476 — `<section id="entregas" class="view hidden">`
L485 — `<section id="carta" class="view hidden">`
L494 — `<section id="turnos" class="view hidden">`
L501 — `<section id="plataforma" class="view hidden">`
L507 — `<section id="usuarios" class="view hidden">`
Funciones JS
L588 — `function toast(msg){`
L593 — `async function api(path,opts={}){`
L609 — `async function login(){`
L621 — `function logout(show=true){`
L628 — `function boot(){`
L638 — `function isAdmin(){ return me?.role==="admin"; }`
L642 — `async function checkTenantThenShow(){`
L657 — `function openOnboarding(){`
L661 — `async function saveOnboarding(){`
L668 — `function showApp(){`
L697 — `function view(id,btn){`
L709 — `async function loadAll(){`
L719 — `function cleanName(n){ return String(n||"").replace(/\s*\(\d{10}\)\s*$/,"").tr`
L720 — `function tableLabel(o){`
L725 — `function personNum(p){ const m=String(p||"").match(/\d+/); return m?Number(m[0`
L726 — `function orderPeople(o){ return Math.max(1,...(o.items||[]).map(it=>personNum(`
L727 — `function groupByPerson(items){`
L731 — `function stationNote(o,dest){ return (o.np && o.np[dest==='barra'?'barra':'coc`
L732 — `function orderTypeLabel(o){ return (o.np && o.np.type) ? `[${o.np.type}]` : ""`
L733 — `function stationBadges(o){`
L742 — `function maxPersonUI(){ return Math.max(1, offsetPeople, currentPerson, ...car`
L743 — `function renderPersonChips(){`
L749 — `function setPerson(i){ currentPerson=i; renderPersonChips(); }`
L750 — `function nextPerson(){`
L756 — `async function onTableChange(){`
L767 — `function unlinkOrder(){ linkedOrder=null; offsetPeople=0; if(!cart.length) cur`
L768 — `function renderLinkBanner(){`
L773 — `function normTxt(s){ return String(s||"").toLowerCase().normalize("NFD").repla`
L774 — `function allCats(){ return menuStructure.sections.flatMap(s=>s.categories.map(`
L775 — `function catById(id){ return id?allCats().find(c=>String(c.id)===String(id)):n`
L776 — `function secById(id){ return menuStructure.sections.find(s=>String(s.id)===Str`
L778 — `function placement(p){`
L786 — `function popularProducts(){ return popular.map(x=>products.find(p=>String(p.id`
L787 — `function renderSectionTabs(){`
L796 — `function selectSection(id){ currentSection=id; currentCategory="TODOS"; render`
L797 — `function renderCategoryChips(){`
L809 — `function filterCategory(i){ currentCategory=chipKeys[i]||"TODOS"; renderCatego`
L810 — `function renderProducts(){`
L819 — `function addToCart(id){`
L827 — `function editCartNote(i){`
L833 — `function renderCart(){`
L844 — `function renderTableSelect(){`
L850 — `async function sendOrder(){`
L875 — `async function loadCanchasData(){`
L885 — `function renderCourtsAdmin(){`
L896 — `async function createCourt(){`
L901 — `async function deleteCourt(id){ if(!confirm("¿Quitar esta cancha?")) return; t`
L902 — `function updateResTotal(){ const court = courtsList.find(c=>String(c.id)===$("`
L903 — `async function createReservation(){`
L912 — `async function deleteReservation(id){ if(confirm("¿Eliminar?")){ await api("/r`
L913 — `function sendReservationWhatsApp(id){ const r = activeReservations.find(x=>Str`
L915 — `function renderTables(){ $("tables").innerHTML = tables.filter(t=>t.type==='me`
L916 — `async function loadStation(dest){`
L929 — `function loadKitchen(){ return loadStation('cocina'); }`
L930 — `function loadBarra(){ return loadStation('barra'); }`
L931 — `async function markReady(id,dest){`
L938 — `function deliveryBar(o){`
L948 — `async function loadOrders(){`
L977 — `function openWaModal(oid){`
L984 — `function pickWaTemplate(key){ $('waText').value = WA_TEMPLATES[key](waOrder); `
L985 — `function sendWaMessage(){`
L990 — `async function loadDrivers(){ driversCache=await api("/drivers").catch(()=>[])`
L991 — `async function assignDriver(oid,driverId){ try{ await api(`/orders/${oid}/deli`
L992 — `async function setDeliveryStatus(oid,status){ try{ await api(`/orders/${oid}/d`
L993 — `async function redeemPrompt(phone){`
L998 — `async function deleteOrder(id){ if(!confirm("¿Borrar esta orden?")) return; tr`
L999 — `function openAddItemsModal(orderId){`
L1009 — `async function confirmAddExtraItem(){`
L1018 — `async function payAndClear(id){`
L1031 — `async function markDelivered(id){`
L1037 — `function ticketHead(o){`
L1041 — `async function previewTicket(id){`
L1062 — `async function sendLoyaltyCard(phone,name){`
L1071 — `function sendTicketWhatsApp(){`
L1082 — `function channelLabel(c){ return {rappi:"🛵 Rappi",uber:"🚗 Uber Eats",domicilio`
L1083 — `async function registerManualTx(){`
L1090 — `function money(n){ return "$"+(Number(n)||0).toLocaleString('es-MX',{minimumFr`
L1091 — `async function loadDashboard(){`
L1107 — `async function deleteMovement(id){ if(!confirm("¿Borrar este movimiento?")) re`
L1108 — `function cutRow(c){`
L1120 — `async function makeCashCut(){`
L1131 — `async function loadInventoryData(){`
L1138 — `async function createInventoryItem(){`
L1145 — `async function updateStockDaily(){`
L1154 — `async function deactivateInvItem(id){ if(!confirm("¿Desactivar este insumo?"))`
L1157 — `async function loadSettings(){`
L1180 — `async function loadPayments(){`
L1192 — `function fmtLocal(t){ try{ return new Date(String(t).replace(' ','T')+'Z').toL`
L1193 — `function openVoid(i){`
L1201 — `function closeVoid(){ $("voidModal").classList.add("hidden"); ["voidAdminPw","`
L1202 — `async function confirmVoid(){`
L1215 — `async function changeVoidPin(){`
L1225 — `async function getTeam(){`
L1231 — `function closeWa(){ $("waModal").classList.add("hidden"); }`
L1232 — `function itemLines(items){ return items.map(x=>`• ${x.qty||1}x ${x.name}${x.no`
L1233 — `function showWa(title, sub, rows){`
L1246 — `async function waComanda(o){`
L1263 — `function waComandaFromOrder(id){`
L1270 — `async function waReady(o,dest){`
L1285 — `async function waEntregado(o){`
L1299 — `async function waTicket(o,r){`
L1311 — `function todayMx(){ const p=new Intl.DateTimeFormat('en-CA',{timeZone:'America`
L1312 — `async function checkShiftReminder(){`
L1325 — `function goTurnos(){ const b=[...document.querySelectorAll("#nav button")].fin`
L1326 — `async function loadShifts(){`
L1331 — `function renderShifts(){`
L1347 — `async function toggleShift(role,shift,uid){`
L1358 — `function matchProductForFile(fname, list){`
L1369 — `function bulkBoxEl(){ return currentView==="carta" ? $("bulkBoxCarta") : $("bu`
L1370 — `async function bulkPhotos(input){`
L1376 — `function renderBulk(){`
L1388 — `async function runBulk(){`
L1402 — `function testPhotos(){`
L1423 — `async function migratePhotos(){`
L1438 — `async function loadLoyaltyDash(){`
L1459 — `function copyJoinLink(){ $("joinLinkBox").select(); document.execCommand("copy`
L1461 — `async function loadDuty(){`
L1472 — `async function saveDuty(uid){`
L1476 — `async function refreshDutyPill(){`
L1483 — `async function loadPlatform(){`
L1487 — `function renderPlatform(list){`
L1502 — `async function setTenantStatus(id,status){`
L1506 — `async function extendTenant(id){`
L1511 — `function goConfig(){ const b=[...document.querySelectorAll("#nav button")].fin`
L1512 — `async function saveSettings(){`
L1529 — `function copyPublicLink(){ $("publicLinkBox").select(); document.execCommand("`
L1530 — `async function saveHub(){`
L1544 — `function copyHubLink(){ $("hubLinkBox").select(); document.execCommand("copy")`
L1545 — `function updateHubQr(){`
L1550 — `function printHubQr(){`
L1557 — `function openExternalOrderModal(){`
L1562 — `function addExtItem(){`
L1569 — `function renderExtCart(){`
L1574 — `async function submitExternalOrder(){`
L1604 — `function kwMatch(text,kw){`
L1608 — `function suggestCategoryName(p){`
L1617 — `function autoClassify(){`
L1628 — `function updateSaveBtn(){ $("saveClassBtn").textContent=`💾 Guardar (${Object.k`
L1629 — `function setPending(i,val){`
L1634 — `async function saveClassification(){`
L1643 — `function catOptions(selected){`
L1646 — `function renderProductAdmin(){`
L1652 — `function renderMenuStructure(){`
L1660 — `function renderClassifyTable(){`
L1673 — `function smartTitle(s){`
L1679 — `function suggestTitle(){`
L1683 — `function handleImageFile(input,previewId,dataFieldId){`
L1697 — `function fileToJpeg(file, MAX=1000){`
L1710 — `async function uploadPhotoData(dataUrl){`
L1716 — `function imgSrc(u){`
L1723 — `async function loadCarta(){`
L1727 — `function renderCarta(){`
L1745 — `async function cartaSave(i, body){`
L1755 — `async function cartaPhoto(i,input){`
L1760 — `function cartaPhotoUrl(i){`
L1890 — `function bestPhotoMatch(name){`
L1901 — `function suggestPhotosFromDrive(){`
L1909 — `function renderPhotoSuggestBox(){`
L1916 — `async function applyPendingPhotos(){`
L1925 — `async function createProduct(){`
L1937 — `async function setProductDest(i,dest){`
L1942 — `async function uploadProductImage(i,input){`
L1951 — `async function toggleSoldOut(i){`
L1956 — `async function deactivateProduct(i){`
L1962 — `async function menuAction(method,path,body,okMsg){`
L1966 — `function addSection(){`
L1972 — `function renameSection(id){ const s=secById(id); const n=prompt("Nuevo nombre `
L1973 — `function setSectionDest(id,dest){ return menuAction("PATCH","/menu-sections/"+`
L1974 — `function deleteSection(id){ if(confirm("¿Eliminar esta sección? (debe estar si`
L1975 — `function addCategory(sid){ const n=prompt("Nombre de la nueva categoría:"); if`
L1976 — `function renameCategory(id){ const c=catById(id); const n=prompt("Nuevo nombre`
L1977 — `function moveCategory(id,dir){ menuAction("PATCH","/menu-categories/"+encodeUR`
L1978 — `function deleteCategory(id){ if(confirm("¿Eliminar la categoría? Sus productos`
L1981 — `async function loadUsers(){`
L1987 — `async function createUser(){`
L1996 — `async function toggleWaNotify(i){`
L2001 — `async function changeWhatsapp(i){`
L2010 — `async function changePassword(i){`
L2018 — `async function deleteUser(i){`
L2026 — `async function loadLoyaltyCustomers(){`
L2030 — `function filteredCustomers(){`
L2034 — `function renderLoyalty(){`
L2039 — `function toggleCustomer(idx){ const p=customers[idx].phone; if(selectedPhones.`
L2040 — `function toggleAllCustomers(){`
L2046 — `function firstName(n){ return String(n||"").split(" ")[0]||""; }`
L2047 — `function campaignText(c){`
L2051 — `function messageCustomer(idx){ const c=customers[idx]; window.open(`https://wa`
L2052 — `function startCampaign(){`
L2058 — `function sendNextCampaign(){`
L2067 — `function renderCampaignBar(){`
L2076 — `function toggleShareLocation(){`
L2090 — `async function loadMyDeliveries(){`
L2105 — `async function myDeliveryNext(oid,status){ try{ await api(`/orders/${oid}/deli`
