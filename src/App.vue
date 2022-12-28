<script lang="ts">
import HeaderView from './view/Header.vue'
import { Component, Vue } from 'vue-property-decorator'

interface Tip {
  place: string;
  title: string;
  tip: string;
}

@Component({
  components: {
    HeaderView
  }
})
export default class App extends Vue {

  showDialog = false
  selectedTip?: Tip;

  openTip(tip: Tip) {
    this.selectedTip = tip;
    this.showDialog = true;
  }

  tips = [
  {
    place: "museum",
    title: "Museu",
    tip: "Vamos observar a criação"
  },
  {
    place: "pawn",
    title: "Casa de Penhores",
    tip: "(Sem pista)"
  },
  {
    place: "cigarshop",
    title: "Charutaria",
    tip: "Tu pediu um, mas vai ganhar 2"
  },
  {
    place: "station",
    title: "Estação de Carruagens",
    tip: "Almoço 1/2: Sair"
  },
  {
    place: "park",
    title: "Parque",
    tip: "Almoço 2/2: Voltar"
  },
  {
    place: "bar",
    title: "Bar",
    tip: "O passeio terá 1 hora e 30 min de duração"
  },
  {
    place: "keychain",
    title: "Chaveiro",
    tip: "Transparece aquele que confirma a beleza"
  },
  {
    place: "bank",
    title: "Banco",
    tip: "Uma série que ambos gostamos"
  },
  {
    place: "drugstore",
    title: "Farmácia",
    tip: "Promessa serão pagas hoje."
  },
  {
    place: "docks",
    title: "Docas",
    tip: "Não, não é um lugar religioso."
  },
  {
    place: "theater",
    title: "Teatro",
    tip: "Eu fiz uma vez, mas hoje você vai comer a que tem a fama."
  },
  {
    place: "hotel",
    title: "Hotel",
    tip: "Temporada 7, Episódio 3"
  },
  {
    place: "bookstore",
    title: "Livraria",
    tip: "Diz que é branco, mas é amarelo"
  },
  {
    place: "scotland",
    title: "Scotland Yard",
    tip: "Quando tiver uma blitz, PARE! kkkk"
  },
  
]
}
</script>

<template>
  <div id="app">
    <HeaderView></HeaderView>
    <div class="case-wrapper">
      <div class="avatar">
        <md-avatar class="cyh md-large">
          <img src="/assets/img/Cyh.png" alt="Avatar" />
        </md-avatar>
      </div>
      <div class="case">
        <h2>Caso 46</h2>
        <p>Bom dia Cyntia!</p>
        <p>Não foi do jeito que eu queria, mas espero que goste mesmo assim. Vai ser no improviso mesmo... </p>
        <p>
          Sendo assim, teu objetivo de hoje é: <br/>
          <ol type="a">
            <li>Onde a gente ta indo?</li>
            <li>Qual teu presente que ta em casa?</li>
            <li>Onde a gente vai almoçar?</li>
          </ol>
        </p>
      </div>
    </div>
    <div class="tips">
        <div class="place" v-for="tip in tips" :key="tip.place" @click="openTip(tip)">
          <!-- <img :src="`/assets/img/${tip.place}.jpg`" /> -->
          <div class="title">{{ tip.title }}</div>
        </div>
    </div>
    <md-dialog :md-active.sync="showDialog">
      <md-dialog-title>{{ selectedTip?.title }}</md-dialog-title>
      <img :src="`/assets/img/${selectedTip?.place}.jpg`" width="80%"/>
      <p>{{ selectedTip?.tip }}</p>
      <md-dialog-actions>
        <md-button class="md-primary" @click="showDialog = false">entendi</md-button>
      </md-dialog-actions>
    </md-dialog>
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=League+Spartan');

#app {
  font-family: 'League Spartan', sans-serif;
  margin: 0px 30px;
  font-size: 20px;

  .place {
    margin: 10px 0;
    border: 2px solid #fff;
    padding: 5px;
    border-radius: 5px;
    background-color: #606060;

    &:active {
      border: 1px solid #fff;
    }
  }

  .case-wrapper {
    margin-top: 10px;
    display: inline-block;
    border: 1px solid #fff;
    border-radius: 5px;
    font-size: 14px;

    .case {
      padding: 10px;
    }

    .avatar{
      width: 30%;
      float: left;

      .cyh {
        border: 2px solid #388d38;
        margin: 20% 20%;
      }
    }
  }
}
</style>
