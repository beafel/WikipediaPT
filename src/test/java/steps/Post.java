package steps;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Entao;
import cucumber.api.java.pt.Quando;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import static org.junit.Assert.assertTrue;

public class Post extends Base {
    private Base base;

    //Construtor
    public Post(Base base) {
        this.base = base;
    }

/*
    @Dado("^que acesso a Wikipedia em Portugues$")
    public void queAcessoAWikipediaEmPortugues() {
        base.driver.get(base.url); // abre o navegador no site alvo (extendendo da Base)
    }

    @Quando("^pesquiso por \"([^\"]*)\"$")
    public void pesquisoPor(String produto) {
        base.driver.findElement(By.id("searchInput")).sendKeys(produto + Keys.ENTER);
    }

    @Entao("^exibe a expressao \"([^\"]*)\" no titulo da aba$")
    public void exibeAExpressaoNoTituloDaAba(String produto) {
        System.out.println("titulo:" + base.driver.getTitle()); // pega o que estah escrito no titulo da aba
        assertTrue(base.driver.getTitle().contains(produto));
    }

 */


    @Given("^que acesso a Wikipedia em Portugues$")
    public void queAcessoAWikipediaEmPortugues() {
        base.driver.get(base.url); // abre o navegador no site alvo (extendendo da Base)
    }

    @When("^pesquiso por \"([^\"]*)\"$")
    public void pesquisoPor(String produto) {
        base.driver.findElement(By.id("searchInput")).sendKeys(produto + Keys.ENTER);
    }

    @Then("^exibe a expressao \"([^\"]*)\" no titulo da aba$")
    public void exibeAExpressaoNoTituloDaAba(String produto) {
        System.out.println("titulo:" + base.driver.getTitle()); // pega o que estah escrito no titulo da aba
        assertTrue(base.driver.getTitle().contains(produto));
    }
}
