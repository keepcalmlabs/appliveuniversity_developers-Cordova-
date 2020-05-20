var eletivas_workshopecongressos_v = `
    <div id='eletiva-workshop' class="card eletivas-cards">
        <div class="card-content" onclick='load_eletivas_list("workshop")'>
            <img src="image/icons/eventos_capacitacao.svg" alt="">
            <div>
                <p>Workshop e Capacitações</p>
                <p class='grey-text'>Créditos:
                <span id="creditos"><%= creditos[0].WorkShopCapacitacao %></span></p>
            </div>
            <i class="material-icons grey-text text-lighten-3">keyboard_arrow_right</i>
        </div>
    </div>

    <div id='eletiva-congressos' class="card eletivas-cards">
        <div class="card-content" onclick='load_eletivas_list("congressos")'>
            <img src="image/icons/eventos_congressos.svg" alt="">
            <div>
                <p>Congressos</p>
                <p class='grey-text'>Créditos:
                <span id="creditos"><%= creditos[0].Congresso %></span></p>
            </div>
            <i class="material-icons grey-text text-lighten-3">keyboard_arrow_right</i>
        </div>
    </div>
    <p class="grey-text text-darken-1 como-aluno">
        * Como aluno MBA você poderá se inscrever em 3 congressos, 2 workshops ou 1 capacitação
    </p>
`;

var eletivas_workshop_v = `
    <div id='eletiva-workshop'  class="card eletivas-cards">
        <div class="card-content">
            <img src="image/icons/eventos_capacitacao.svg" alt="">
            <div>
                <p>Workshop e Capacitações</p>
                <p class='grey-text'>Créditos:
                <span id="creditos"><%= creditos[0].WorkShopCapacitacao %></span></p>
            </div>
            <i class="material-icons grey-text text-lighten-3">keyboard_arrow_right</i>
        </div>
    </div>
`;

var eletivas_congressos_v = `
    <div id='eletiva-congressos' class="card eletivas-cards">
        <div class="card-content">
            <img src="image/icons/eventos_congressos.svg" alt="">
            <div>
                <p>Congressos</p>
                <p class='grey-text'>Créditos:
                <span id="creditos"><%= creditos[0].Congresso %></span></p>
            </div>
            <i class="material-icons grey-text text-lighten-3">keyboard_arrow_right</i>
        </div>
    </div>
`;

var eletivas_footer_v = `
    <p class="grey-text text-darken-1 como-aluno">
        * Como aluno MBA você poderá se inscrever em 3 congressos, 2 workshops ou 1 capacitação
    </p>
`;