<template>
  <div class="flex flex-row items-center justify-center pt-4 w-full">
    <pre></pre>
    <input
      type="search"
      name=""
      class="bg-white rounded-l-md shadow py-1 px-2 w-10/12 md:w-1/4 focus:outline-none"
      placeholder="Buscar..."
      id=""
    />

    <input
      type="submit"
      value="Ok!"
      class="py-1 px-2 rounded-r-md shadow cursor-pointer bg-gray-800 text-white"
    />
    {{ stock.length }}
  </div>

  <!-- COD2BEND, SECCION, SUBSECCION, GRUPOS/ETIQUETAS, CLASIFICACION, MARCA, ROTACION, SUBFAMILIA_SSTT  -->
  <div class="w-full flex flex-row items-center justify-start pt-4">
    <selector
      @change="filtroStock()"
      :valores="['UNO', 'DOS']"
      id="filtroCod2bend"
    >
    </selector>
  </div>

  <!-- component -->
  <div class="overflow-x-auto">
    <div class="flex items-center justify-center font-sans overflow-x-auto">
      <div class="w-full">
        <p v-bind:class="[stock.length > 0 ? 'hidden' : '']">INCIE FILTROS</p>
        <div
          class="bg-white shadow-md rounded my-6"
          v-bind:class="[stock.length > 0 ? '' : 'hidden']"
        >
          <table
            class="min-w-max w-full table-fixed text-xxs font-bold text-gray-800 border"
          >
            <thead class="bg-gray-800 text-white leading-8 uppercase">
              <th class="w-52">Cod. 2bend</th>
              <th class="w-52">Descripción SSTT</th>
              <th class="w-36">Seccion/Área</th>
              <th class="w-36">Grupos/Etiquetas</th>
              <th class="w-28">Clasificación</th>
              <th class="w-28">Marca/Modelo</th>
              <th class="w-28">Caracteristicas</th>
              <th class="w-28">Referencia</th>
              <th class="w-28">Rotación</th>
              <th class="w-28">Stock</th>
              <th class="w-28">Coste U.</th>
              <th class="w-28">Coste Almacen</th>
              <th class="w-28">Subfamilia SSTT</th>
              <th class="w-28">Tiempos</th>
            </thead>
            <tbody class="text-gray-600">
              <tr
                v-for="(item, index) in stock"
                :key="index"
                class="border-b border-gray-200 divide-x cursor-pointer"
              >
                <td class="py-1 px-1 text-left">
                  <div class="flex flex-row items-center justify-start">
                    <h1
                      class="font-bold text-xxs px-1 rounded-sm bg-indigo-100 mr-1 text-indigo-400"
                    >
                      {{ item.cod2bend }}
                    </h1>
                    <p class="">
                      {{ item.descripcionCod2bend }}
                    </p>
                  </div>
                </td>
                <td class="py-1 px-1 text-justify">
                  <p>{{ item.descripcionSST }}</p>
                </td>

                <td class="py-1 px-1 text-left uppercase">
                  <div class="flex flex-row items-center justify-center">
                    <seccion :seccion="item.seccion"></seccion>
                    <p class="">{{ item.subseccion }}</p>
                  </div>
                </td>
                <td class="py-1 px-1 text-left">
                  <div
                    class="flex flex-row flex-wrap items-center justify-start"
                  >
                    <h1
                      class="font-bold text-xxs px-1 rounded-sm bg-indigo-100 m-1 text-indigo-400"
                    >
                      Grupo 1
                    </h1>
                    <h1
                      class="font-bold text-xxs px-1 rounded-sm bg-indigo-100 m-1 text-indigo-400"
                    >
                      Grupo X
                    </h1>
                    <h1
                      class="font-bold text-xxs px-1 rounded-sm bg-indigo-100 m-1 text-indigo-400"
                    >
                      Grupo X
                    </h1>
                  </div>
                </td>
                <td class="py-1 px-1 text-center">
                  <clasificacion clasificacion="FF&E"></clasificacion>
                </td>
                <td class="py-1 px-1 text-center">
                  <div class="flex flex-col items-start justify-center">
                    <span class="minititles">MARCA</span>
                    <h1>{{ item.marca }}</h1>
                    <span class="minititles">MOD</span>
                    <h1>{{ item.modelo }}</h1>
                  </div>
                </td>
                <td class="py-1 px-1 text-center">
                  <h1>{{ item.caracteristicas }}</h1>
                </td>
                <td class="py-1 px-1 text-center">
                  <h1>{{ item.referencia }}</h1>
                </td>
                <td class="py-1 px-1 text-left">
                  <rotacion :rot="item.rotacion"></rotacion>
                </td>
                <td class="py-1 px-1 text-center">
                  <div class="flex flex-col items-start justify-center">
                    <span class="minititles">TÉORICO</span>
                    <h1>{{ item.stockTeorico }}</h1>
                    <span class="minititles">REAL</span>
                    <h1>{{ item.stockReal }}</h1>
                  </div>
                </td>
                <td class="py-1 px-1 text-center">
                  <div class="flex flex-col items-center justify-center">
                    <span class="minititles">USD</span>
                    <h1>$ {{ item.coste > 0 ? item.coste : 0 }}</h1>
                  </div>
                </td>
                <td class="py-1 px-1 text-center">
                  <div class="flex flex-col items-start justify-center">
                    <span class="minititles">TÉORICO</span>
                    <h1>
                      $ {{ item.costoTeorico > 0 ? item.costoTeorico : 0 }}
                    </h1>
                    <span class="minititles">REAL</span>
                    <h1>$ {{ item.costoReal > 0 ? item.costoReal : 0 }}</h1>
                  </div>
                </td>
                <td class="py-1 px-1 text-center">
                  <h1>{{ item.subfamiliaSSTT }}</h1>
                </td>
                <td class="py-1 px-1 text-center">
                  <div class="flex flex-col items-start justify-center">
                    <span class="minititles">T. VIDA</span>
                    <h1>{{ item.tiempoVidaUtil }}</h1>
                    <span class="minititles">F. INSTALACIÓN</span>
                    <h1>{{ item.fechaInstalacion }}1</h1>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed, onMounted } from "vue";
import Clasificacion from "./Clasificacion.vue";
import Rotacion from "./Rotacion.vue";
import Seccion from "./Seccion.vue";
import Selector from "./Selector.vue";
import { ref } from "vue";

export default {
  components: { Seccion, Rotacion, Clasificacion, Selector },
  setup() {
    const store = useStore();

    onMounted(() => {
      store.dispatch("getStock");
      // await store.dispatch("filtrarStock", "");
    });

    const stock = computed(() => {
      return store.state.stockFiltrado;
    });

    const filtroStock = () => {
      store.dispatch("filtrarStock", "123123123");
      console.log("Ok");
    };

    return { stock, filtroStock };
  },
};
</script>

<style scoped>
.minititles {
  font-weight: 700;
  font-size: 7px;
  color: #c4c4c4;
}

tr:nth-child(even) {
  @apply bg-gray-100;
}

tr:hover {
  @apply bg-blue-100;
  @apply text-gray-800;
}

tr:hover span {
  @apply text-gray-900;
}
</style>
