from behave import *
from behave import *
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.select import Select
import time
driver = webdriver.Chrome()

@given('Acessou o menu de cadastro de custo')
def step_impl(context):
    print('Acessando a tela de cadastro de custo')
    time.sleep(5)
    driver.get("file:///C:/Users/Yan/Documents/projetos/html_css_js/Gerenciamento%20de%20Custo/index.html")
    menu = driver.find_element(By.ID, 'novo_gasto')
    menu.click()

@when('Preencho as informacoes do meu novo custo')
def step_impl(context):
    print('Preenchi minhas inforamções')
    time.sleep(5)
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
    time.sleep(5)
    concluir = driver.find_element(By.ID, 'nextBtn')
    concluir.click()
    print('Salvei o registro')
    driver.find_element(By.ID, 'novo_gasto')
    print('Voltou para o menu')
    time.sleep(60)
