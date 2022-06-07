<template>
    <form class="form-container">
        <h4 class="text-center mb-3">Cadastro de usuário</h4>
        <div class="row mb-3">
            <label for="name" class="col-sm-2 col-form-label">Nome</label>
            <div class="col-sm-10">
            <input type="text" class="form-control" id="inputName">
            </div>
        </div>
        <div class="row mb-3">
            <label for="email" class="col-sm-2 col-form-label">Email</label>
            <div class="col-sm-10">
            <input type="email" class="form-control" id="inputEmail">
            </div>
        </div>
        <div class="row mb-3">
            <label for="inputPassword3" class="col-sm-2 col-form-label">Senha</label>
            <div class="col-sm-5">
            <input type="password" class="form-control" id="inputPassword">
            </div>
        </div>
        <fieldset class="row mb-3">
            <legend class="col-form-label col-sm-2 pt-0">Tipo</legend>
            <div class="col-sm-10">
                <div class="form-check d-inline-flex">
                    <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked>
                    <label class="form-check-label mx-2" for="gridRadios1">
                    Cliente
                    </label>
                </div>
                <div class="form-check d-inline-flex mx-5">
                    <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2">
                    <label class="form-check-label mx-2" for="gridRadios2">
                    Técnico
                    </label>
                </div>
            </div>
        </fieldset>
        <div class="d-flex justify-content-end">
            <button type="submit" class="btn btn-primary align-self-end">+ Cadastrar</button>
        </div>
    </form>
</template>
    