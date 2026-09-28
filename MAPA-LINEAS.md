Mapa de líneas · RUSH POS v38.0
Referencia para pedir cambios por número de línea. Válido para ESTA versión (v38.0).
server.js (1958 líneas)
Tablas
L175 — ``CREATE TABLE IF NOT EXISTS tenants (`
L182 — `await db.prepare(`CREATE TABLE IF NOT EXISTS tenant_settings (tenant_id TEXT, `
L322 — `await db.prepare(`CREATE TABLE IF NOT EXISTS pos_settings (key TEXT PRIMARY KE`
L324 — ``CREATE TABLE IF NOT EXISTS pos_loyalty (`
L334 — ``CREATE TABLE IF NOT EXISTS pos_loyalty_events (`
L339 — ``CREATE TABLE IF NOT EXISTS pos_voids (`
L348 — ``CREATE TABLE IF NOT EXISTS pos_shifts (`
L376 — ``CREATE TABLE IF NOT EXISTS pos_sessions (`
L386 — ``CREATE TABLE IF NOT EXISTS pos_menu_sections (`
L390 — ``CREATE TABLE IF NOT EXISTS pos_menu_categories (`
L404 — `await db.prepare(`CREATE TABLE IF NOT EXISTS pos_driver_locations (driver_id T`
L406 — ``CREATE TABLE IF NOT EXISTS pos_push_subs (`
L411 — ``CREATE TABLE IF NOT EXISTS pos_cash_movements (`
L416 — ``CREATE TABLE IF NOT EXISTS pos_cuts (`
L421 — ``CREATE TABLE IF NOT EXISTS pos_inventory (`
L426 — ``CREATE TABLE IF NOT EXISTS pos_inventory_moves (`
L1454 — ``CREATE TABLE IF NOT EXISTS pos_courts (`
L1458 — ``CREATE TABLE IF NOT EXISTS pos_reservations (`
Endpoints
L498 — `if (path === "/api/shipping-quote" && request.method === "POST") {`
L509 — `if (path === "/api/track" && request.method === "GET") {`
L547 — `if (path === "/api/loyalty-card" && request.method === "GET") {`
L560 — `if (path === "/api/signup" && request.method === "POST") {`
L594 — `if (path === "/api/tenant-status" && request.method === "GET") {`
L621 — `if (path === "/api/login" && request.method === "POST") {`
L665 — `if (path === "/api/loyalty-join" && request.method === "POST") {`
L691 — `if (path === "/api/push-vapid-key" && request.method === "GET") return json({ `
L692 — `if (path === "/api/push-subscribe" && request.method === "POST") {`
L701 — `if (path === "/api/push-unsubscribe" && request.method === "POST") {`
L706 — `if (path === "/api/push-test" && request.method === "POST") {`
L713 — `if (path === "/api/loyalty-manual-stamp" && request.method === "POST") {`
L731 — `if (path === "/api/public-settings" && request.method === "GET") {`
L746 — `if (path === "/api/public-menu" && request.method === "GET") {`
L752 — `if (path === "/api/public-order" && request.method === "POST") {`
L824 — `if (path === "/api/onboarding" && request.method === "POST") {`
L836 — `if (path === "/api/platform/tenants" && request.method === "GET") {`
L854 — `if (path === "/api/logout" && request.method === "POST") {`
L957 — `if (path === "/api/loyalty-token" && request.method === "POST") {`
L970 — `if (path === "/api/loyalty-redeem" && request.method === "POST") {`
L981 — `if (path === "/api/team-wa" && request.method === "GET") {`
L991 — `if (path === "/api/on-duty" && request.method === "GET") {`
L996 — `if (path === "/api/on-duty" && request.method === "POST") {`
L1009 — `if (path === "/api/settings" && request.method === "GET") {`
L1014 — `if (path === "/api/settings" && request.method === "PATCH") {`
L1026 — `if (path === "/api/drivers" && request.method === "GET") {`
L1049 — `if (path === "/api/my-deliveries" && request.method === "GET") {`
L1056 — `if (path === "/api/my-location" && request.method === "POST") {`
L1068 — `if (path === "/api/loyalty-dashboard" && request.method === "GET") {`
L1100 — `if (path === "/api/customers" && request.method === "GET") {`
L1177 — `if (path === "/api/photo-upload" && request.method === "POST") {`
L1188 — `if (path === "/api/photos/status" && request.method === "GET") {`
L1199 — `if (path === "/api/photos/migrate" && request.method === "POST") {`
L1232 — `if (path === "/api/menu" && request.method === "GET") {`
L1241 — `if (path === "/api/menu-structure" && request.method === "GET") {`
L1248 — `if (path === "/api/menu-popular" && request.method === "GET") {`
L1258 — `if (path === "/api/menu" && request.method === "POST") {`
L1288 — `if (path === "/api/menu-classify" && request.method === "POST") {`
L1334 — `if (path === "/api/menu-sections" && request.method === "POST") {`
L1389 — `if (path === "/api/menu-categories" && request.method === "POST") {`
L1441 — `if (path === "/api/tables" && request.method === "GET") {`
L1464 — `if (path === "/api/courts" && request.method === "GET") {`
L1468 — `if (path === "/api/courts" && request.method === "POST") {`
L1484 — `if (path === "/api/reservations" && request.method === "GET") {`
L1491 — `if (path === "/api/reservations" && request.method === "POST") {`
L1635 — `if (path === "/api/external-order" && request.method === "POST") {`
L1710 — `if (path === "/api/shifts" && request.method === "GET") {`
L1721 — `if (path === "/api/shifts" && request.method === "POST") {`
L1732 — `if (path === "/api/shifts-status" && request.method === "GET") {`
L1754 — `if (path === "/api/payments/recent" && request.method === "GET") {`
L1769 — `if (path === "/api/void-payment" && request.method === "POST") {`
L1821 — `if (path === "/api/void-pin" && request.method === "POST") {`
L1833 — `if (path === "/api/dashboard" && request.method === "GET") {`
L1844 — `if (path === "/api/manual-transactions" && request.method === "POST") {`
L1868 — `if (path === "/api/cuts" && request.method === "GET") {`
L1873 — `if (path === "/api/cuts" && request.method === "POST") {`
L1892 — `if (path === "/api/inventory" && request.method === "GET") {`
L1896 — `if (path === "/api/inventory" && request.method === "POST") {`
L1913 — `if (path === "/api/inventory-moves" && request.method === "GET") {`
public/index.html (2256 líneas)
Secciones
L124 — `<section id="loginView" class="login">`
L136 — `<section id="appView" class="hidden">`
L155 — `<section id="venta" class="view">`
L196 — `<section id="canchas" class="view hidden">`
L217 — `<section id="mesas" class="view hidden">`
L222 — `<section id="cocina" class="view hidden">`
L227 — `<section id="barra" class="view hidden">`
L232 — `<section id="ordenes" class="view hidden">`
L237 — `<section id="caja" class="view hidden">`
L278 — `<section id="lealtad" class="view hidden">`
L315 — `<section id="inventario" class="view hidden">`
L340 — `<section id="productos" class="view hidden">`
L375 — `<section id="config" class="view hidden">`
L496 — `<section id="entregas" class="view hidden">`
L505 — `<section id="carta" class="view hidden">`
L514 — `<section id="turnos" class="view hidden">`
L521 — `<section id="plataforma" class="view hidden">`
L527 — `<section id="usuarios" class="view hidden">`
Funciones JS
L608 — `function toast(msg){`
L613 — `async function api(path,opts={}){`
L629 — `async function login(){`
L641 — `function logout(show=true){`
L648 — `function boot(){`
L658 — `function isAdmin(){ return me?.role==="admin"; }`
L662 — `async function checkTenantThenShow(){`
L677 — `function openOnboarding(){`
L681 — `async function saveOnboarding(){`
L688 — `function showApp(){`
L717 — `function view(id,btn){`
L729 — `async function loadAll(){`
L739 — `function cleanName(n){ return String(n||"").replace(/\s*\(\d{10}\)\s*$/,"").tr`
L740 — `function tableLabel(o){`
L745 — `function personNum(p){ const m=String(p||"").match(/\d+/); return m?Number(m[0`
L746 — `function orderPeople(o){ return Math.max(1,...(o.items||[]).map(it=>personNum(`
L747 — `function groupByPerson(items){`
L751 — `function stationNote(o,dest){ return (o.np && o.np[dest==='barra'?'barra':'coc`
L752 — `function orderTypeLabel(o){ return (o.np && o.np.type) ? `[${o.np.type}]` : ""`
L753 — `function stationBadges(o){`
L762 — `function maxPersonUI(){ return Math.max(1, offsetPeople, currentPerson, ...car`
L763 — `function renderPersonChips(){`
L769 — `function setPerson(i){ currentPerson=i; renderPersonChips(); }`
L770 — `function nextPerson(){`
L776 — `async function onTableChange(){`
L787 — `function unlinkOrder(){ linkedOrder=null; offsetPeople=0; if(!cart.length) cur`
L788 — `function renderLinkBanner(){`
L793 — `function normTxt(s){ return String(s||"").toLowerCase().normalize("NFD").repla`
L794 — `function allCats(){ return menuStructure.sections.flatMap(s=>s.categories.map(`
L795 — `function catById(id){ return id?allCats().find(c=>String(c.id)===String(id)):n`
L796 — `function secById(id){ return menuStructure.sections.find(s=>String(s.id)===Str`
L798 — `function placement(p){`
L806 — `function popularProducts(){ return popular.map(x=>products.find(p=>String(p.id`
L807 — `function renderSectionTabs(){`
L816 — `function selectSection(id){ currentSection=id; currentCategory="TODOS"; render`
L817 — `function renderCategoryChips(){`
L829 — `function filterCategory(i){ currentCategory=chipKeys[i]||"TODOS"; renderCatego`
L830 — `function renderProducts(){`
L839 — `function addToCart(id){`
L847 — `function editCartNote(i){`
L853 — `function renderCart(){`
L864 — `function renderTableSelect(){`
L870 — `async function sendOrder(){`
L899 — `async function loadCanchasData(){`
L909 — `function renderCourtsAdmin(){`
L920 — `async function createCourt(){`
L925 — `async function deleteCourt(id){ if(!confirm("¿Quitar esta cancha?")) return; t`
L926 — `function updateResTotal(){ const court = courtsList.find(c=>String(c.id)===$("`
L927 — `async function createReservation(){`
L936 — `async function deleteReservation(id){ if(confirm("¿Eliminar?")){ await api("/r`
L937 — `function sendReservationWhatsApp(id){ const r = activeReservations.find(x=>Str`
L939 — `function renderTables(){ $("tables").innerHTML = tables.filter(t=>t.type==='me`
L940 — `async function loadStation(dest){`
L953 — `function loadKitchen(){ return loadStation('cocina'); }`
L954 — `function loadBarra(){ return loadStation('barra'); }`
L955 — `async function markReady(id,dest){`
L962 — `function deliveryBar(o){`
L972 — `async function loadOrders(){`
L1001 — `function openWaModal(oid){`
L1008 — `function pickWaTemplate(key){ $('waText').value = WA_TEMPLATES[key](waOrder); `
L1009 — `function sendWaMessage(){`
L1014 — `async function loadDrivers(){ driversCache=await api("/drivers").catch(()=>[])`
L1015 — `async function assignDriver(oid,driverId){ try{ await api(`/orders/${oid}/deli`
L1016 — `async function setDeliveryStatus(oid,status){ try{ await api(`/orders/${oid}/d`
L1017 — `async function redeemPrompt(phone){`
L1022 — `async function deleteOrder(id){ if(!confirm("¿Borrar esta orden?")) return; tr`
L1023 — `function openAddItemsModal(orderId){`
L1033 — `async function confirmAddExtraItem(){`
L1042 — `async function payAndClear(id){`
L1055 — `async function markDelivered(id){`
L1061 — `function ticketHead(o){`
L1065 — `async function previewTicket(id){`
L1086 — `async function sendLoyaltyCard(phone,name){`
L1097 — `function offerLoyaltyFollowup(name,phone){`
L1110 — `async function sendFollowupLoyalty(name){`
L1116 — `function sendTicketWhatsApp(){`
L1127 — `function channelLabel(c){ return {rappi:"🛵 Rappi",uber:"🚗 Uber Eats",domicilio`
L1128 — `async function registerManualTx(){`
L1135 — `function money(n){ return "$"+(Number(n)||0).toLocaleString('es-MX',{minimumFr`
L1136 — `async function loadDashboard(){`
L1152 — `async function deleteMovement(id){ if(!confirm("¿Borrar este movimiento?")) re`
L1153 — `function cutRow(c){`
L1165 — `async function makeCashCut(){`
L1176 — `async function loadInventoryData(){`
L1183 — `async function createInventoryItem(){`
L1190 — `async function updateStockDaily(){`
L1199 — `async function deactivateInvItem(id){ if(!confirm("¿Desactivar este insumo?"))`
L1202 — `async function loadSettings(){`
L1225 — `async function loadPayments(){`
L1237 — `function fmtLocal(t){ try{ return new Date(String(t).replace(' ','T')+'Z').toL`
L1238 — `function openVoid(i){`
L1246 — `function closeVoid(){ $("voidModal").classList.add("hidden"); ["voidAdminPw","`
L1247 — `async function confirmVoid(){`
L1260 — `async function changeVoidPin(){`
L1270 — `async function getTeam(){`
L1276 — `function closeWa(){ $("waModal").classList.add("hidden"); }`
L1277 — `function itemLines(items){ return items.map(x=>`• ${x.qty||1}x ${x.name}${x.no`
L1278 — `function showWa(title, sub, rows){`
L1291 — `async function waComanda(o){`
L1308 — `function waComandaFromOrder(id){`
L1315 — `async function waReady(o,dest){`
L1330 — `async function waEntregado(o){`
L1344 — `async function waTicket(o,r){`
L1360 — `async function refreshPushUI(){`
L1375 — `async function enablePush(){`
L1387 — `async function testPush(){`
L1391 — `async function disablePush(){`
L1402 — `function todayMx(){ const p=new Intl.DateTimeFormat('en-CA',{timeZone:'America`
L1403 — `async function checkShiftReminder(){`
L1416 — `function goTurnos(){ const b=[...document.querySelectorAll("#nav button")].fin`
L1417 — `async function loadShifts(){`
L1422 — `function renderShifts(){`
L1438 — `async function toggleShift(role,shift,uid){`
L1449 — `function matchProductForFile(fname, list){`
L1460 — `function bulkBoxEl(){ return currentView==="carta" ? $("bulkBoxCarta") : $("bu`
L1461 — `async function bulkPhotos(input){`
L1467 — `function renderBulk(){`
L1479 — `async function runBulk(){`
L1493 — `function testPhotos(){`
L1514 — `async function migratePhotos(){`
L1529 — `async function loadLoyaltyDash(){`
L1554 — `function copyJoinLink(){ $("joinLinkBox").select(); document.execCommand("copy`
L1555 — `function openManualStamp(phone,name){`
L1559 — `async function submitManualStamp(){`
L1572 — `async function loadDuty(){`
L1583 — `async function saveDuty(uid){`
L1587 — `async function refreshDutyPill(){`
L1594 — `async function loadPlatform(){`
L1598 — `function renderPlatform(list){`
L1613 — `async function setTenantStatus(id,status){`
L1617 — `async function extendTenant(id){`
L1622 — `function goConfig(){ const b=[...document.querySelectorAll("#nav button")].fin`
L1623 — `async function saveSettings(){`
L1640 — `function copyPublicLink(){ $("publicLinkBox").select(); document.execCommand("`
L1641 — `async function saveHub(){`
L1655 — `function copyHubLink(){ $("hubLinkBox").select(); document.execCommand("copy")`
L1656 — `function updateHubQr(){`
L1661 — `function printHubQr(){`
L1668 — `function openExternalOrderModal(){`
L1673 — `function addExtItem(){`
L1680 — `function renderExtCart(){`
L1685 — `async function submitExternalOrder(){`
L1715 — `function kwMatch(text,kw){`
L1719 — `function suggestCategoryName(p){`
L1728 — `function autoClassify(){`
L1739 — `function updateSaveBtn(){ $("saveClassBtn").textContent=`💾 Guardar (${Object.k`
L1740 — `function setPending(i,val){`
L1745 — `async function saveClassification(){`
L1754 — `function catOptions(selected){`
L1757 — `function renderProductAdmin(){`
L1763 — `function renderMenuStructure(){`
L1771 — `function renderClassifyTable(){`
L1784 — `function smartTitle(s){`
L1790 — `function suggestTitle(){`
L1794 — `function handleImageFile(input,previewId,dataFieldId){`
L1808 — `function fileToJpeg(file, MAX=1000){`
L1821 — `async function uploadPhotoData(dataUrl){`
L1827 — `function imgSrc(u){`
L1834 — `async function loadCarta(){`
L1838 — `function renderCarta(){`
L1856 — `async function cartaSave(i, body){`
L1866 — `async function cartaPhoto(i,input){`
L1871 — `function cartaPhotoUrl(i){`
L2001 — `function bestPhotoMatch(name){`
L2012 — `function suggestPhotosFromDrive(){`
L2020 — `function renderPhotoSuggestBox(){`
L2027 — `async function applyPendingPhotos(){`
L2036 — `async function createProduct(){`
L2048 — `async function setProductDest(i,dest){`
L2053 — `async function uploadProductImage(i,input){`
L2062 — `async function toggleSoldOut(i){`
L2067 — `async function deactivateProduct(i){`
L2073 — `async function menuAction(method,path,body,okMsg){`
L2077 — `function addSection(){`
L2083 — `function renameSection(id){ const s=secById(id); const n=prompt("Nuevo nombre `
L2084 — `function setSectionDest(id,dest){ return menuAction("PATCH","/menu-sections/"+`
L2085 — `function deleteSection(id){ if(confirm("¿Eliminar esta sección? (debe estar si`
L2086 — `function addCategory(sid){ const n=prompt("Nombre de la nueva categoría:"); if`
L2087 — `function renameCategory(id){ const c=catById(id); const n=prompt("Nuevo nombre`
L2088 — `function moveCategory(id,dir){ menuAction("PATCH","/menu-categories/"+encodeUR`
L2089 — `function deleteCategory(id){ if(confirm("¿Eliminar la categoría? Sus productos`
L2092 — `async function loadUsers(){`
L2098 — `async function createUser(){`
L2107 — `async function toggleWaNotify(i){`
L2112 — `async function changeWhatsapp(i){`
L2121 — `async function changePassword(i){`
L2129 — `async function deleteUser(i){`
L2137 — `async function loadLoyaltyCustomers(){`
L2141 — `function filteredCustomers(){`
L2145 — `function renderLoyalty(){`
L2150 — `function toggleCustomer(idx){ const p=customers[idx].phone; if(selectedPhones.`
L2151 — `function toggleAllCustomers(){`
L2157 — `function firstName(n){ return String(n||"").split(" ")[0]||""; }`
L2158 — `function campaignText(c){`
L2162 — `function messageCustomer(idx){ const c=customers[idx]; window.open(`https://wa`
L2163 — `function startCampaign(){`
L2169 — `function sendNextCampaign(){`
L2178 — `function renderCampaignBar(){`
L2187 — `function toggleShareLocation(){`
L2201 — `async function loadMyDeliveries(){`
L2216 — `async function myDeliveryNext(oid,status){ try{ await api(`/orders/${oid}/deli`
