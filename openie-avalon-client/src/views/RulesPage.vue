<template>
    <div>

        <div class="navbar bg-base-100">
            <div class="flex-none">
                <button class="btn btn-square btn-ghost">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                        class="inline-block w-5 h-5 stroke-current">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16">
                        </path>
                    </svg>
                </button>
            </div>
            <div class="flex-1">
                <a class="btn btn-ghost normal-case text-xl">OpenIE Avalon</a>
            </div>
            <div class="flex-none">
                <button class="btn btn-square btn-ghost">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                        class="inline-block w-5 h-5 stroke-current">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z">
                        </path>
                    </svg>
                </button>
            </div>
        </div>






        <div class="alert alert-info">
            <span>Avalon Overview</span>
        </div>

        <div class="chat chat-start">
            <div class="chat-bubble">Avalon is a spin-off game of The Resistance, a party game that challenges players to
                deduce one another's
                identities. You may have played similar games such as Werewolf and Mafia. Those titles have their merits,
                but Avalon
                works great because players don't die—meaning no one gets left out of the fun.
            </div>
        </div>


        <div class="alert alert-success">
            <span>Charactor Info (Good Team)</span>
        </div>

        <div class="card bg-base-100 shadow-xl w-full h-5/6">
            <figure><img src="../assets/Merlin.png" alt="Merlin" /></figure>
            <div class="card-body">
                <h2 class="card-title">Merlin</h2>
                <p>Merlin learns Mordred's followers when the game begins.</p>
            </div>
        </div>

        <div class="card bg-base-100 shadow-xl w-full h-5/6">
            <figure><img src="../assets/Percival.png" alt="Percival" /></figure>
            <div class="card-body">
                <h2 class="card-title">Percival</h2>
                <p>Percival, a loyal servant of Arthur, is able to learn Merlin's identity at the beginning of the game by
                    having Merlin stick his thumb in the air. Merlin—and everyone else—does not learn Percival's identity.
                    This character can help cover for Merlin and will balance the game toward the good team.
                </p>
            </div>
        </div>

        <div class="card bg-base-100 shadow-xl w-full h-5/6">
            <figure><img src="../assets/LoyalServant.png" alt="LoyalServant" /></figure>
            <div class="card-body">
                <h2 class="card-title">Loyal Servant</h2>
                <!-- <p>Merlin learns Mordred's followers when the game begins.</p> -->
            </div>
        </div>


        <div class="alert alert-warning">
            <span>Charactor Info (Bad Team)</span>
        </div>
        <div class="card bg-base-100 shadow-xl w-full h-5/6">
            <figure><img src="../assets/Mordred.png" alt="Mordred" /></figure>
            <div class="card-body">
                <h2 class="card-title">Mordred</h2>
                <p>The Leader of Bad Team, who can recognize every Bad team member.</p>
            </div>
        </div>

        <div class="card bg-base-100 shadow-xl w-full h-5/6">
            <figure><img src="../assets/Assassin.png" alt="Assassin" /></figure>
            <div class="card-body">
                <h2 class="card-title">Assassin</h2>
                <p>Assassin can steal victory by guessing Merlin's identity.</p>
            </div>
        </div>

        <div class="card bg-base-100 shadow-xl w-full h-5/6">
            <figure><img src="../assets/Morgana.png" alt="Morgana" /></figure>
            <div class="card-body">
                <h2 class="card-title">Morgana</h2>
                <p>Morgana, a minion of Mordred, deceives Percival. During the beginning round, where Merlin puts his thumb
                    in the air to reveal himself to Percival, Morgana also raises her own thumb, confusing Percival as to
                    which "Merlin" to trust. Morgana balances the game in favor of evil, and her effect, of course, only
                    works when Percival's ability is agreed to be used.
                </p>
            </div>
        </div>


        <div class="card bg-base-100 shadow-xl w-full h-5/6">
            <figure><img src="../assets/Oberon.png" alt="Oberon" /></figure>
            <div class="card-body">
                <h2 class="card-title">Oberon</h2>
                <p>Unlucky you. You've drawn the Oberon card, who, despite being a servant of Mordred, is somewhat of a
                    hindrance. Oberon does not reveal himself to evil players, and also they do not reveal themselves to
                    him. Oberon still raises his thumb for Merlin to see, however. Oberon makes the other evil players have
                    to deduce one of their own's identities, while Oberon does the same with them. It balances the game in
                    favor of the good team.
                </p>
            </div>
        </div>


        <div class="card bg-base-100 shadow-xl w-full h-5/6">
            <figure><img src="../assets/MinionOfMordred.png" alt="MinionOfMordred" /></figure>
            <div class="card-body">
                <h2 class="card-title">Minion Of Mordred</h2>
                <!-- <p>Merlin learns Mordred's followers when the game begins.</p> -->
            </div>
        </div>





        <div class="btm-nav">
            <button v-on:click="this.$router.push({ name: 'Home' })">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                <span class="btm-nav-label">Home</span>
            </button>
            <button class="active">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span class="btm-nav-label">Game Rules</span>
            </button>
            <button v-on:click="this.$router.push({ name: 'SettingsPage' })">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                <span class="btm-nav-label">Settings</span>
            </button>
        </div>


    </div>
</template>

<script>
export default {
    name: "RulesPage",
    components: {},
    data() {
        return {}
    },
    methods: {},
    mounted() { },
}
</script>

<style scoped></style>