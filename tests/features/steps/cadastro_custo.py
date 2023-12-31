from behave import *
from behave import *
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.select import Select
from pathlib import Path
import os

driver = webdriver.Chrome()

@given('Acessou o menu de cadastro de custo')
def step_impl(context):
    print('Acessando a tela de cadastro de custo')
    
    github_workspace = os.environ.get('GITHUB_WORKSPACE')
    html_page = f'{github_workspace}/index.html'
    
    html_page = Path.cwd() / '../index.html'
    driver.get(html_page.as_uri())

    menu = driver.find_element(By.ID, 'novo_gasto')
    menu.click()

@when('Preencho as informacoes do meu novo custo')
def step_impl(context):
    print('Preenchi minhas inforamções')
    classificacao = Select(driver.find_element(By.ID, 'classificacao'))

    classificacao.select_by_index(4)

    proximo = driver.find_element(By.ID, 'nextBtn')
    proximo.click()

    nome = driver.find_element(By.ID, 'nome')
    descricao = driver.find_element(By.ID, 'descricao')
    valor = driver.find_element(By.ID, 'valor')

    nome.send_keys("Prego")
    descricao.send_keys("Pacote de 50 pregos")
    valor.send_keys("50,00")

@then('A tela de custo e concluida')
def step_impl(context):
    concluir = driver.find_element(By.ID, 'nextBtn')
    concluir.click()
    print('Salvei o registro')
    driver.find_element(By.ID, 'novo_gasto')
    print('Voltou para o menu')
