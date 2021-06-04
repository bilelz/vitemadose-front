import{L as e,S as t,R as s,l as a,a as i,b as c,h as r,P as o,C as n,c as d,d as l,p as v,e as m}from"./index.11c20662.js";import"./vendor.1d43dcfd.js";var p=Object.defineProperty,u=Object.getOwnPropertyDescriptor,h=(e,t,s,a)=>{for(var i,c=a>1?void 0:a?u(t,s):t,r=e.length-1;r>=0;r--)(i=e[r])&&(c=(a?i(t,s,c):i(c))||c);return a&&c&&p(t,s,c),c};let b=class extends e{constructor(){super(...arguments),this.recuperationCommunesEnCours=!1,this.statsLieu=void 0}async onSearch(e){const r="standard";if(t.isByDepartement(e.detail)){const t=e.detail.departement;s.navigateToRendezVousAvecDepartement(t.code_departement,a(t),r)}else{const t=e.detail.commune,o=(await i.current.departementsDisponibles()).find((({code_departement:e})=>e===t.codeDepartement));if(!o)return void console.error(`Can't find departement matching code ${t.codeDepartement}`);s.navigateToRendezVousAvecCommune("distance",o.code_departement,a(o),t.code,t.codePostal,c(t),r)}}render(){return r`
            <div class="searchAppointment">
                <div class="searchAppointment-title h1">
                  <slot name="main-title"></slot>
                </div>

                <div class="searchAppointment-form">
                    <div class="searchAppointmentForm-fields">
                          <vmd-search
                            @on-search="${this.onSearch.bind(this)}"
                          />
                    </div>
                </div>
            </div>

            <div class="platforms mt-5">
                <h2 class="text-gray-600 text-center mb-5 h5">Trouvez vos rendez-vous avec</h2>

                <div class="row justify-content-center align-items-center">
                  ${Object.values(o).filter((e=>e.promoted)).map((e=>r`
                        <div class="col-auto">
                          <img class="platforms-logo ${e.styleCode}" src="${s.basePath}assets/images/png/${e.logo}" alt="Créneaux de vaccination ${e.nom}">
                        </div>
                      `))}
                </div>
            </div>

            <div class="spacer mt-5 mb-5"></div>

            <div class="container-xxl">
                <div class="row gx-5">
                    <div class="col-sm-24 col-md mb-5 mb-md-0 homeCard">
                        <div class="p-5 text-dark bg-light homeCard-container">
                            <div class="homeCard-content">
                                <h2>VaccinTracker</h2>

                                <p>
                                    Combien de personnes ont été vaccinées ? Combien de premières injections ? Quel pourcentage de seconde injection ? Suivez la campagne vaccinale en France sur Vaccintracker.
                                </p>
                            </div>

                            <div class="homeCard-actions">
                                <div class="row justify-content-center justify-content-lg-start mt-5">
                                    <a href="https://covidtracker.fr/vaccintracker/" target="_blank" rel="noreferrer" class="col-auto btn btn-primary btn-lg">
                                        Accéder à VaccinTracker&nbsp;<i class="bi vmdicon-arrow-up-right"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-24 col-md homeCard">
                        <div class="p-5 text-dark bg-light homeCard-container">
                            <div class="homeCard-content">
                                <h2>Carte des centres de vaccination contre la Covid-19</h2>

                                <p>
                                    Trouvez un centre de vaccination contre la Covid-19 proche de chez vous, consultez les centres pour savoir s’il y a des rendez-vous
                                </p>
                            </div>

                            <div class="homeCard-actions">
                                <div class="row justify-content-center justify-content-lg-start mt-5">
                                    <a href="${s.basePath}centres" class="col-auto btn btn-primary btn-lg">
                                        Accéder à la carte des centres&nbsp;<i class="bi vmdicon-arrow-up-right"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="homeCard">
                    <div class="p-5 text-dark bg-light homeCard-container mt-5">
                        <div class="row gx-5">
                            <div class="col-24 col-md text-center">
                                <i class="bi vmdicon-building fs-6 text-primary"></i>
                                <a href="${s.basePath}statistiques" >
                                    <div class="h4 mt-4">${this.statsLieu?this.statsLieu.global.disponibles.toLocaleString():""}</div>
                                    <p>Lieux de vaccination ayant des disponibilités</p>
                                </a>
                            </div>
                            <div class="col-24 col-md text-center">
                                <i class="bi vmdicon-geo-alt-fill fs-6 text-primary"></i>
                                <a href="${s.basePath}statistiques" >
                                    <div class="h4 mt-4">${this.statsLieu?this.statsLieu.global.total.toLocaleString():""}</div>
                                    <p>Lieux de vaccination supportés</p>
                                </a>
                            </div>
                            <div class="col-24 col-md text-center">
                                <i class="bi vmdicon-check-circle-fill fs-6 text-primary"></i>
                                <a href="${s.basePath}statistiques" >
                                    <div class="h4 mt-4">${this.statsLieu?this.statsLieu.global.creneaux.toLocaleString():""}</div>
                                    <p>Créneaux de vaccination disponibles</p>
                                </a>
                              <em style="font-size: 1.3rem">Ce nombre ne correspond pas au nombre de doses disponibles</em>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="spacer mt-5 mb-5"></div>

            <slot name="about"></slot>
        `}async connectedCallback(){super.connectedCallback(),this.statsLieu=await i.current.statsLieux()}};b.styles=[n,d,l`
            :host {
                display: block;
            }
        `],h([v({type:Array,attribute:!1})],b.prototype,"recuperationCommunesEnCours",2),h([v({type:Array,attribute:!1})],b.prototype,"statsLieu",2),b=h([m("vmd-home")],b);export{b as VmdHomeView};
