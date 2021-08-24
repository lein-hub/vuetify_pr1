<template>
  <v-container>
    <v-card class="pa-3">
      <p class="font-weight-black">
        Button Colors
      </p>
      <v-row>
        <v-col cols="auto">
          <v-btn>
            Default
          </v-btn>
        </v-col>
        <v-col cols="auto">
          <v-btn color="primary">
            Primary
          </v-btn>
        </v-col>
        <v-col cols="auto">
          <v-btn color="secondary">
            Secondary
          </v-btn>
        </v-col>
        <v-col cols="auto">
          <v-btn color="success">
            Success
          </v-btn>
        </v-col>
        <v-col cols="auto">
          <v-btn color="warning">
            Warning
          </v-btn>
        </v-col>
        <v-col cols="auto">
          <v-btn color="error">
            Error
          </v-btn>
        </v-col>
      </v-row>
    </v-card>

    <v-card class="pa-3 mt-3">
      <p class="font-weight-black">
        Buttons with Label
      </p>
      <v-row>
        <v-col cols="auto">
          <v-btn>
            <v-icon
              left
            >
              mdi-chevron-left
            </v-icon>
            Default
          </v-btn>
        </v-col>
        <v-col cols="auto">
          <v-btn color="primary">
            <v-icon
              left
            >
              mdi-chevron-right
            </v-icon>
            Primary
          </v-btn>
        </v-col>
        <v-col cols="auto">
          <v-btn color="secondary">
            <v-icon
              left
            >
              mdi-exclamation
            </v-icon>
            Secondary
          </v-btn>
        </v-col>
        <v-col cols="auto">
          <v-btn color="success">
            <v-icon left>
              mdi-check
            </v-icon>
            Success
          </v-btn>
        </v-col>
        <v-col cols="auto">
          <v-btn color="warning">
            <v-icon left>
              mdi-alert
            </v-icon>
            Warning
          </v-btn>
        </v-col>
        <v-col cols="auto">
          <v-btn color="error">
            <v-icon left>
              mdi-window-close
            </v-icon>
            Error
          </v-btn>
        </v-col>
      </v-row>
    </v-card>

    <v-card class="pa-3 mt-3">
      <p class="font-weight-black">
        Button Size
      </p>
      <v-row>
        <v-col cols="auto">
          <v-btn
            color="primary"
            x-small
          >
            x-small
          </v-btn>
        </v-col>
        <v-col cols="auto">
          <v-btn
            color="primary"
            small
          >
            small
          </v-btn>
        </v-col>
        <v-col cols="auto">
          <v-btn color="primary">
            normal
          </v-btn>
        </v-col>
        <v-col cols="auto">
          <v-btn
            color="primary"
            large
          >
            large
          </v-btn>
        </v-col>
        <v-col cols="auto">
          <v-btn
            color="primary"
            x-large
          >
            x-large
          </v-btn>
        </v-col>
      </v-row>
    </v-card>

    <v-card class="pa-3 mt-3">
      <p class="font-weight-black">
        Button Style
      </p>
      <v-row>
        <v-col cols="auto">
          <v-btn color="primary">
            default
          </v-btn>
        </v-col>
        <v-col cols="auto">
          <v-btn
            color="primary"
            rounded
          >
            rounded
          </v-btn>
        </v-col>
        <v-col cols="auto">
          <v-btn
            color="primary"
            tile
          >
            tile
          </v-btn>
        </v-col>
        <v-col cols="auto">
          <v-btn
            color="primary"
            text
          >
            text
          </v-btn>
        </v-col>
        <v-col cols="auto">
          <v-btn
            color="primary"
            depressed
          >
            depressed
          </v-btn>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
export default {

}
</script>
